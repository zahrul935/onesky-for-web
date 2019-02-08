import React, { Component } from 'react';
import './App.css';
import intl from 'react-intl-universal';
import HtmlComponent from "./Html";
import http from "axios";

class App extends Component {
  state = {
    initDone: false,
    oneskyAppId: "aa339d82-7365-406b-af92-f3d1f4c77651",
    oneskyCookieKeyPrefix: "os_display-language_",
    urlLocaleKey: "lang"
  };

  componentDidMount() {
    window.onesky.identifiedUser = {
      id: 'identified-user-react-example',
      name: 'John Doe',
      email: 'identified-user-react-example@gmail.com'
    }
    window.OsWidget.replace();
    this.loadLocalizedContents();
  }

  render() {
    var url = new URL(window.location.href);
    var region = url.searchParams.get("region");
    return (
      this.state.initDone &&
      <div>
        <HtmlComponent region={ region } />
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