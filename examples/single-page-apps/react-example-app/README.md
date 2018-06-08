This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Pre-requisite
For some localization effects, internationalization (i18n) is the pre-requisite of app localization. We have list of i18n building block suggestions depends on the tech stack picked in your web app.

In Display interface texts in preferred language effect example, we have to extract the formatted source texts from source code to string files, which you can refer the best practices from our i18n start guide.

In this example, we use [react-intl-universal](https://github.com/alibaba/react-intl-universal) as the i18n framework for React app.

## Installation
Open the index.html ([example](https://github.com/onesky/onesky-for-web/blob/master/examples/single-page-apps/react-example-app/public/index.html)) file and include the source script from cdn by pasting code snippets inline of HTML code, for example

```
<script src="https://cdn.onesky.app/widget/363228f3-3780-46a4-95ce-383396418be7"></script>
<script type="text/javascript">
    window.onesky = {
        app: {
            id: '363228f3-3780-46a4-95ce-383396418be7'
        }
    };
</script>
```
The above code snippets are from our demo app. Please replace the `script src` and `app id` of your OneSky app which could be found in the installation guide in OneSky dashboard.

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
To add string files transfer in the process, in `package.json`, modify `scripts` to:

```
{
  "scripts": {
    "start": "onesky-conductor --app-id $ONESKY_APP_ID --api-key $ONESKY_API_KEY --string-file-path public/locales ; react-scripts start",
    "build": "onesky-conductor --app-id $ONESKY_APP_ID --api-key $ONESKY_API_KEY --string-file-path public/locales ; react-scripts build",
    "test": "onesky-conductor --app-id $ONESKY_APP_ID --api-key $ONESKY_API_KEY --string-file-path public/locales ; react-scripts test --env=jsdom"
  }
}
```