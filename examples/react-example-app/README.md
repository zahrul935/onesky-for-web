This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Pre-requisite
For some localization effects, internationalization (i18n) is the pre-requisite of app localization. We have list of i18n building block suggestions depends on the tech stack picked in your web app.

In Display interface texts in preferred language effect example, we have to extract the formatted source texts from source code to string files, which you can refer the best practices from our i18n start guide.

In this example, we use [react-intl-universal](https://github.com/alibaba/react-intl-universal) as the i18n framework for React app.

## Installation
Open the index.html ([example](https://github.com/onesky/onesky-for-web/blob/master/examples/single-page-apps/react-example-app/public/index.html)) file and include the source script from cdn by pasting code snippets inline of HTML code, for example

```
<script src="https://cdn.onesky.app/widget/aa339d82-7365-406b-af92-f3d1f4c77651"></script>
<script type="text/javascript">
    window.onesky = {
        app: {
            id: 'aa339d82-7365-406b-af92-f3d1f4c77651'
        }
    };
</script>
```
The above code snippets are from our demo app. Please replace the `script src` and `app id` of your OneSky app which could be found in the installation guide in OneSky dashboard.

The HTML tag `<language-selector></language-selector>` is the location where the localization effect selector rendered. You can adjust it's position by placing it inside lines of HTML code.


## Build script
We support string files transfer, this takes place before app building process. In OneSky for Web, we achieve it with [onesky-conductor](https://www.npmjs.com/package/onesky-conductor).

### Introduce onesky-conductor into your dev and build process
onesky-conductor retrieves string files for the web app via API

#### Install and save onesky-conductor via npm
```
npm i --save onesky-conductor
```

### Adjust your npm-scripts
Define environment variables `ONESKY_APP_ID` and `ONESKY_API_KEY` under your project environment, for example,
```
export ONESKY_APP_ID=aa339d82-7365-406b-af92-f3d1f4c77651
export ONESKY_API_KEY=291878c9b5de3fbdf7bedff8570c3d68
```

Then add string files transfer in the process, in `package.json`, modify `scripts` to:

```
{
  "scripts": {
    "start": "onesky-conductor --app-id $ONESKY_APP_ID --api-key $ONESKY_API_KEY --string-file-path public/locales ; react-scripts start",
    "build": "onesky-conductor --app-id $ONESKY_APP_ID --api-key $ONESKY_API_KEY --string-file-path public/locales ; react-scripts build",
    "test": "onesky-conductor --app-id $ONESKY_APP_ID --api-key $ONESKY_API_KEY --string-file-path public/locales ; react-scripts test --env=jsdom"
  }
}
```

## Run
Under the folder `onesky-for-web/examples/react-example-app`:

### npm
If you use npm, run the following commands to engage the app localization flow:
```
# install
npm install

# run on local machine
npm start
```

### yarn
If you use yarn, run the following commands to engage the app localization flow:
```
# install
yarn

# run on local machine
yarn run start
```
