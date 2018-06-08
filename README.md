# OneSky for Web

## Live demos
- [Live demo (Anonymous user)](https://onesky.github.io/onesky-for-web/examples/basic-javascript/anonymous_user.html)
- [Live demo (Identified user)](https://onesky.github.io/onesky-for-web/examples/basic-javascript/identified_user.html)

## Installation
To install OneSky for Web SDKs, first identify which installation type suits for your web product:
- Basic Javascript
- Single page app

### Basic Javascript
Basic Javascript suits for a statc web page (e.g. HTML file) or server-side rendering web site (e.g. PHP). To install OneSky for Web into your product, just include the source script from cdn by pasting code snippets inline of HTML code, for example

```javascript
<script src="https://cdn.onesky.app/widget/363228f3-3780-46a4-95ce-383396418be7"></script>
<script type="text/javascript">
    window.onesky = {
        app: {
            id: '363228f3-3780-46a4-95ce-383396418be7'
        }
    };
</script>

<language-selector></language-selector>
```
The above code snippets are from our demo app. Please replace the `script src` and `app id` of your OneSky app which could be found in the installation guide in OneSky dashboard.

The HTML tag `<language-selector></language-selector>` is the location where the localization effect selector rendered. You can adjust it's position by placing it inside lines of HTML code.

### Single page app
For some localization effects, internationalization (i18n) is the pre-requisite of app localization. We have list of i18n building block suggestions depends on the tech stack picked in your web app.

We have examples of single page apps in different JS frameworks such as
- [React example app](https://github.com/onesky/onesky-for-web/tree/master/examples/single-page-apps/react-example-app)
- [Vue example app](https://github.com/onesky/onesky-for-web/tree/master/examples/single-page-apps/vue-example-app)

The installation steps of OneSky for Web might have slightly difference based on the i18n libraries your team picked. Please refer to our example readme for more details.

## End Users Identification
We allow saving end users' locale preferences. There are two types of users we care about:
1. Anonymous user (without a user identity in your app)
1. Identified user (with a user identity in your app)

### Anonymous user
We save an anonymous user's locale preference using cookies. By default, you do not have to modify anything in the installation code snippet to achieve the save. Since anonymous users do not have any identities in your app, we will only handle their locale preferences in their devices locally, no preferences are saved in our side.

```javascript
<script type="text/javascript">
    window.onesky = {
        app: {
            id: 'cfad03c9-0071-4de4-a58c-71a0d4cd9f31'
        }
    };
</script>
```

### Identified user
We support to save an end user's locale preference if the identity is provided. You have to add the attribute `identifiedUser` on the page which the end user will browse, for example:
```javascript
<script type="text/javascript">
    window.onesky = {
        app: {
            id: 'cfad03c9-0071-4de4-a58c-71a0d4cd9f31'
        },
        identifiedUser: {
            id: '123456',
            name: 'John Doe',
            email: 'johndoe@gmail.com',
            userHash: 'b613679a0814d9ec772f95d778c35fc5ff1697c493715653c6c712144292c5ad'
        }
    };
</script>
```
We will save the identified user's locale preference remotely so that the preferences could be cross platforms. There is an attribute `userHash` which is generated with our Identity verification feature, aims to help to make sure that one user cannot impersonate another. We strongly encourage your team to set up and enable identity verification if you are using identified user in production environment. For testing purpose, just leave the `userHash` blank so that we will ignore it if identity verification is enabled.
