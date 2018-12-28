import React, { Component } from 'react';
import './App.css';
import intl from 'react-intl-universal';
import HtmlComponent from "./Html";
import http from "axios";

class App extends Component {
  state = {
    initDone: false,
    oneskyAppId: "f99ea11d-4a9a-45dc-a226-611efcc024c2",
    oneskyCookieKeyPrefix: "os_display-language_",
    urlLocaleKey: "lang"
  };

  componentDidMount() {
    this.loadLocalizedContents();
  }

  render() {
    return (
      this.state.initDone &&
      <div>
        <HtmlComponent />
      </div>
    );
  }

  loadLocalizedContents() {

    const urlLocaleKey = this.state.urlLocaleKey;
    const cookieLocaleKey = `${this.state.oneskyCookieKeyPrefix}${this.state.oneskyAppId}`;

    let currentLocale = intl.determineLocale({
      urlLocaleKey: urlLocaleKey,
      cookieLocaleKey: cookieLocaleKey
    });

    http.get(`locales/${currentLocale}.json`)
      .then(res => {
        console.log("App locale data", res.data);
        // init method will load CLDR locale data according to currentLocale
        return intl.init({
          currentLocale,
          locales: {
            [currentLocale]: res.data
          }
        });
      }).then(() => {
        // After loading CLDR locale data, start to render
        this.setState({ initDone: true });
      }).catch(function (err) {
        // Handle missing string file error
        if(err.hasOwnProperty('config')){
            if(err.config.hasOwnProperty('url')){
              const missingFile = err.config.url.split('/').pop();
              const missingLocale = missingFile.split('.').shift();
              
              // get the fallback locale from cookie
              const fallbackLocale = decodeURIComponent(document.cookie).split(';').find(function(value){
                return value.split('=')[0].trim() === cookieLocaleKey;
              }).split('=')[1].trim().replace(/_/g, '-');

              if (missingLocale !== fallbackLocale) {
                window.location.search = `?${urlLocaleKey}=${fallbackLocale}`;
              }
            }
        }
      });
  }
}

export default App;