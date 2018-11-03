# onesky-conductor for Web
To streamline the app localization development flow, onesky-conductor retrieves string files via OneSky's App API and writes to specific folder for the web app. It executes during app packing process. For more information, please refer to our [Developer Hub](https://developers.onesky.app/docs/web-installation).

## Install
Install and save onesky-conductor to your web app
`npm i -save onesky-conductor`

## Usage
```
onesky-conductor --help

  Usage: onesky-conductor [options]

  Options:

    -V, --version                            output the version number
    -a, --app-id <appId>                     app Id
    -k, --api-key <apiKey>                   API key for web for API authentication.
    -f, --file-format [fileFormat]           format that string file content represent. (default: json)
    -p, --string-file-path [stringFilePath]  directory which string files are placed. (default: locales)
    -h, --help                               output usage information
```

### Example
Download string files from Demp App
```
onesky-conductor --app-id ${ONESKY_APP_ID} --api-key ${ONESKY_API_KEY}
```

### Adjust your npm-scripts
Define environment variables `ONESKY_APP_ID` and `ONESKY_API_KEY` under your project environment. Then in `package.json`, append the onesky-conductor command with corresponding arguments to scripts, for example:
```
{
  "scripts": {
    "start": "onesky-conductor --app-id $ONESKY_APP_ID --api-key $ONESKY_API_KEY ; react-scripts start",
    "build": "onesky-conductor --app-id $ONESKY_APP_ID --api-key $ONESKY_API_KEY ; react-scripts build",
    "test": "onesky-conductor --app-id $ONESKY_APP_ID --api-key $ONESKY_API_KEY ; react-scripts test --env=jsdom"
  }
}
```

### Run
#### npm
If you use npm, run `npm start` or `npm run build` will engage the app localization flow.

#### yarn
If you use yarn, run `yarn run` or `yarn build` will engage the app localization flow.
