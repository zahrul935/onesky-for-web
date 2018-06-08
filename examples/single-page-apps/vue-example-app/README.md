## Pre-requisite
For some localization effects, internationalization (i18n) is the pre-requisite of app localization. We have list of i18n building block suggestions depends on the tech stack picked in your web app.

In Display interface texts in preferred language effect example, we have to extract the formatted source texts from source code to string files, which you can refer the best practices from our i18n start guide.

In this example, we use [vue-i18n](https://github.com/kazupon/vue-i18n) as the i18n framework for Vue app.

## Installation
Open the index.html ([example](https://github.com/onesky/onesky-for-web/blob/master/examples/single-page-apps/react-example-app/public/index.html)) file and include the source script from cdn by pasting code snippets inline of HTML code. You may reference the installation from the example in src/main.js

The HTML tag `<language-selector></language-selector>` is the location where the localization effect selector rendered. You can adjust it's position by placing it inside lines of HTML code.

## Build
We support string files transfer, this takes place before app building process. In OneSky for Web, we achieve it with [onesky-conductor](https://www.npmjs.com/package/onesky-conductor).

### Introduce onesky-conductor into your dev and build process
onesky-conductor retrieves string files for the web app via API

#### Install and save onesky-conductor via npm
```
npm i --save onesky-conductor
```

### Adjust your npm-scripts
To add string files transfer in the process, in `package.json`, modify `scripts" to:

```
{
  "scripts": {
    "dev": "onesky-conductor --app-id $ONESKY_APP_ID --api-key $ONESKY_API_KEY --string-file-path locales --file-format vue-i18n-json ; cross-env NODE_ENV=development webpack-dev-server --open --hot",
    "build": "onesky-conductor --app-id $ONESKY_APP_ID --api-key $ONESKY_API_KEY --string-file-path locales --file-format vue-i18n-json ; cross-env NODE_ENV=production webpack --progress --hide-modules"
  }
}
```