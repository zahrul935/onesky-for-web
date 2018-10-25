#!/usr/bin/env node

var program = require('commander');
const sdkVersion = '1.0.11';

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
const platformId = 'web-spa';

request({url: `${apiInvokeUrl}/apps/${program.appId}`, headers:{'Authorization': `Bearer ${program.apiKey}`, 'Platform': `${platformId}`, 'SDK-Version': `${sdkVersion}`}}, (err, res, body) => {

    try {
        /**
         * Response must be exist and response status code must be 200
         */
        if (!res || res.statusCode !== 200) {
            throw new Error(`Response must be exist and response status code must be 200`);
        }

        /**
         * Response body must be exist
         */
        if (!body) {
            throw new Error('No response body found.');
        }

        /**
         * Parse response from OneSky API
         */
        body = JSON.parse(body);

    } catch (e) {
        /**
         * Statements that are executed if an exception is thrown in the try block.
         */
        throw new Error(`${e.name + ":" + e.message + "\n" + e.stack}`);
    }

    if (body.app.selectors) {
        body.app.selectors.map((selector) => {
            /**
             * Only to request string files for display-language type
             */
            if (selector.type !== 'display-language') return;

            selector.locales.map(locale => {
                request({url: `${apiInvokeUrl}/apps/${program.appId}/string-files?languageId=${locale.id}&fileFormat=${program.fileFormat}`, headers:{'Authorization': `Bearer ${program.apiKey}`}}, (err, res, body) => {
                    try {

                        /**
                        * Only to save string files for display-language type
                        */
                        if (selector.type === 'display-language') {
                          /**
                           * Response must be exist and response status code must be 200
                           */
                          if (!res || res.statusCode !== 200) {
                              throw new Error(`Response must be exist and response status code must be 200`);
                          }

                          /**
                           * Response body must be exist
                           */
                          if (!body) {
                              throw new Error('Response body must be exist');
                          }

                            /**
                             * Create string files
                             */
                            const fileExtension = program.fileFormat.split('-').pop();
                            saveFile(program.stringFilePath, `${locale.platformLocale}.${fileExtension}`, body);
                        }

                    } catch (e) {
                        /**
                         * Statements that are executed if an exception is thrown in the try block.
                         */
                        if (e.message === "Response body must be exist") {
                            console.warn('\x1b[33m%s\x1b[0m', `String file of language id '${locale.id}' does not exist.`);
                        }
                        else {
                            throw new Error(`${e.name + ":" + e.message + "\n" + e.stack}`);
                        }
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