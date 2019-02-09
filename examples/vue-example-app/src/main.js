import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import vueCustomElement from 'vue-custom-element'
import http from "axios"

const oneskyAppId = "aa339d82-7365-406b-af92-f3d1f4c77651"
const oneskyCookieKeyPrefix = "os_display-language_";
const urlLocaleKey = "lang"

loadLocaleSelector();
loadLocalizedContents(function(i18n) {
    new Vue({
      i18n,
      el: '#app',
      render: h => h(App)
    });
});

// Enable adding html tag for locale selectors
function loadLocaleSelector() {
  Vue.use(vueCustomElement)
  Vue.customElement('language-selector', {
      render: h => h()
  });
  Vue.customElement('region-selector', {
      render: h => h()
  });

  const script = document.createElement("script")
  script.type = "text/javascript";
  script.src = `https://cdn.onesky.app/widget/${oneskyAppId}`;
  document.getElementsByTagName("head")[0].appendChild(script);

  window.onesky = {
    app: {
      id: oneskyAppId
    }
  };
}

// Setup i18n and load content
function loadLocalizedContents(callback) {
  const url = new URL(location.href);
  const currentLocale = url.searchParams.get(urlLocaleKey) || 'en-US';

  http.get(`locales/${currentLocale}.json`)
    .then(res => {
      let fileContent = {};
      fileContent[currentLocale] = res.data;

      Vue.use(VueI18n);
      const i18n = new VueI18n({
        locale: currentLocale,
        messages: fileContent
      });

      callback(i18n);
    })
    .then(() => {

    }).catch(function (err) {
      // Handle missing string file error
      if(err.hasOwnProperty('config')){
          if(err.config.hasOwnProperty('url')){
            const missingFile = err.config.url.split('/').pop();
            const missingLocale = missingFile.split('.').shift();
            
            // get the fallback locale from cookie
            const fallbackLocale = decodeURIComponent(document.cookie).split(';').find(function(value){
              return value.split('=')[0].trim() === `${oneskyCookieKeyPrefix}${oneskyAppId}`
            }).split('=')[1].trim().replace(/_/g, '-');
            
            if (missingLocale !== fallbackLocale) {
              window.location.search = `?${urlLocaleKey}=${fallbackLocale}`;
            }
          }
      }
    });
}
