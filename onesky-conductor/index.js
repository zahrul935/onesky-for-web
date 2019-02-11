#!/usr/bin/env node

var program = require('commander');
const sdkVersion = '1.0.17';

program
  .version(sdkVersion)
  .option('-a, --app-id <appId>', 'app Id')
  .option('-k, --api-key <apiKey>', 'API key for web for API authentication.')
  .option('-f, --file-format [fileFormat]', 'format that string file content represent.', 'json')
  .option('-p, --string-file-path [stringFilePath]', 'directory which string files are placed.', 'locales')
  .parse(process.argv);

const request = require('request');
const fs = require('fs');

const apiInvokeUrl = 'https://app-api.onesky.app/v1';
const platformId = 'web';

request({url: `${apiInvokeUrl}/apps/${program.appId}`, headers:{'Authorization': `Bearer ${program.apiKey}`, 'Platform': `${platformId}`, 'SDK-Version': `${sdkVersion}`}}, (err, res, body) => {

    try {

        /**
         * Response body must be exist
         */
        if (!body) {
            throw new Error('Internal error. Please contact support@onesky.app');
        }

        /**
         * Parse response from OneSky API
         */
        body = JSON.parse(body);

        /**
         * 1st API call response handler, to check authority
         * Response must be exist and response status code must be 200
         */
        if (!res || res.statusCode !== 200) {
            var firstError = body.errors[0];
            if (firstError) {
              if (firstError.message.indexOf("Unauthorized") > -1) {
                console.error('\x1b[1;31m%s\x1b[0m', `Unauthorized access. Please check your app ID and API key`);
              }
              throw new Error(firstError.message);
            }
        }

    } catch (e) {
        /**
         * Statements that are executed if an exception is thrown in the try block.
         */
        throw new Error(`${e.message + "\n" + e.stack}`);
    }

    if (body.app.selectors) {
        body.app.selectors.map((selector) => {
            /**
             * Only to request string files for display-language type
             */
            if (selector.type !== 'display-language') return;

            selector.locales.map(locale => {
                request({url: `${apiInvokeUrl}/apps/${program.appId}/string-files?languageId=${locale.id}&fileFormat=${program.fileFormat}`, headers:{'Authorization': `Bearer ${program.apiKey}`}}, (err, res, stringFileContent) => {
                    try {

                        /**
                        * Only to save string files for display-language type
                        */
                        if (selector.type === 'display-language') {
                          /**
                           * 2st API call response handler, to check plan subscription
                           * Response must be exist and response status code must be 200
                           */
                          if (!res || res.statusCode !== 200) {
                            var firstError = stringFileContent.errors[0];
                            if (firstError) {
                              if (firstError.message.indexOf("conductor plan") > -1) {
                                console.error('\x1b[1;31m%s\x1b[0m', `${firstError.message}`);
                              }

                              throw new Error(firstError.message);
                            }
                          } else {
                            /**
                             * If success response without content, it means there has no strings for that locale
                             */
                            if (!stringFileContent) {
                              console.warn('\x1b[33m%s\x1b[0m', `String file of language id '${locale.id}' does not exist.`);
                            }

                            /**
                             * Create string files
                             */
                            const fileExtension = program.fileFormat.split('-').pop();
                            saveFile(program.stringFilePath, `${locale.platformLocale}.${fileExtension}`, stringFileContent);
                          }
                        }

                    } catch (e) {
                        /**
                         * Statements that are executed if an exception is thrown in the try block.
                         */
                        throw new Error(`${e.message + "\n" + e.stack}`);
                    }
                });
            });
        });
    }
    else {
        console.error('\x1b[1;31m%s\x1b[0m', 'No localization effect found, please define one in OneSky dashboard.');
    }
});

const saveFile = (path, fileName, body) =>
    fs.mkdir(`${path}`, () => {
        createFile(path, fileName, body)
    });

const createFile = (path, fileName, body) => {
    fs.writeFile(`${path}/${fileName}`, body, (err) => {
        if (err) {
          if (err.code == 'ENOENT') {
            console.error('\x1b[1;31m%s\x1b[0m', `Directory '${path}' not found, cannot save to ${err.path}`);
          }
        }
        else {
          console.info(`String file ${fileName} has been saved to ${path}`);
        }
    });
}
