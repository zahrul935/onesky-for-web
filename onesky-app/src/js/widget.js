(function () {

    // Begin code-gen: Selector of app rule
    console.log("Keep this placeholder mark for selectors code generation: begin");
    window.OsSelectors = [{
        "type":"display-language","htmlTag":"language-selector","theme":"general",
        "options":["ar_AE","en_US","ru_RU","zh_Hans_CN","zh_Hant_TW"],"defaultValue":"en_US","respectOrder":["user-input","auto-detection"],
        "webTransitionMappings":[{"localeId":"ar_AE","location":"?lang=ar-AE"},{"localeId":"en_US","location":"?lang=en-US"},
            {"localeId":"ru_RU","location":"?lang=ru-RU"},{"localeId":"zh_Hans_CN","location":"?lang=zh-Hans-CN"},{"localeId":"zh_Hant_TW","location":"?lang=zh-Hant-TW"}],
        "isWebTransitionReloadPage":false,"locales":[{"id":"ar_AE","displayName":"العربية","platformLocale":"ar-AE","additionalProperties":[{"key":"direction","value":"rtl"}]},
            {"id":"en_US","displayName":"English","platformLocale":"en-US","additionalProperties":[{"key":"direction","value":"ltr"}]},{"id":"ru_RU","displayName":"русский",
                "platformLocale":"ru-RU","additionalProperties":[{"key":"direction","value":"ltr"}]},{"id":"zh_Hans_CN","displayName":"简体中文 (中国)","platformLocale":"zh-Hans-CN",
                "additionalProperties":[{"key":"direction","value":"ltr"}]},{"id":"zh_Hant_TW","displayName":"繁體中文 (台灣)","platformLocale":"zh-Hant-TW","additionalProperties":
                    [{"key":"direction","value":"ltr"}]}],
        "css":".oswidget-dropdown-language-current-selection,.oswidget-dropdown-language-current-selection-rtl{background-image:url(https://onesky-locale-widget-web-stag.firebaseapp.com/images/global.png);background-repeat:no-repeat;background-size:19px 19px}.oswidget-dropdown-language{position:relative;display:inline-block}.oswidget-dropdown-language-button{padding:0;font-size:13px;border:none;outline:0;cursor:pointer}.oswidget-dropdown-language-current-selection{border:1px solid #cacaca;background-color:#fafafa;padding:5px 5px 5px 20px;width:170px;background-position:4px 50%}.oswidget-dropdown-language-current-selection-name{width:150px}.oswidget-dropdown-language-arrow{float:right}.oswidget-dropdown-language-content{display:none;position:absolute;min-width:195px;box-shadow:0 2px 4px 0 rgba(0,0,0,.2);border:1px solid #cacaca;z-index:99}.oswidget-dropdown-language-content a{color:#333;padding:10px 10px 10px 32px;text-decoration:none;text-align:left;display:block}.oswidget-dropdown-language-content a:hover{background-color:#ddd;color:#000}.oswidget-dropdown-language:hover .oswidget-dropdown-language-content{display:block;background-color:#fafafa}.oswidget-dropdown-language:hover .oswidget-dropdown-language-button{color:#00a4bd}.oswidget-dropdown-language-rtl{position:relative;display:inline-block}.oswidget-dropdown-language-button-rtl{padding:0;font-size:13px;border:none;outline:0;cursor:pointer}.oswidget-dropdown-language-current-selection-rtl{border:1px solid #cacaca;background-color:#fafafa;padding:5px 20px 5px 5px;width:170px;background-position:171px 50%}.oswidget-dropdown-language-current-selection-name-rtl{width:150px}.oswidget-dropdown-language-arrow-rtl{float:left}.oswidget-dropdown-language-content-rtl{display:none;position:absolute;min-width:195px;box-shadow:0 0 4px 2px rgba(0,0,0,.2);border:1px solid #cacaca;z-index:99}.oswidget-dropdown-language-content-rtl a{color:#333;padding:10px 32px 10px 10px;text-decoration:none;text-align:right;display:block}.oswidget-dropdown-language-content-rtl a:hover{background-color:#ddd;color:#000}.oswidget-dropdown-language-rtl:hover .oswidget-dropdown-language-content-rtl{display:block;background-color:#fafafa}.oswidget-dropdown-language-rtl:hover .oswidget-dropdown-language-button-rtl{color:#00a4bd}"
    },{
        "type":"display-region","htmlTag":"region-selector","theme":"general","options":["CN","JP","TW","US","RU"],"defaultValue":"US","respectOrder":
            ["user-input","auto-detection"],"webTransitionMappings":[{"localeId":"CN","location":"?region=CN"},{"localeId":"JP","location":"?region=JP"},{"localeId":"TW","location":"?region=TW"},
            {"localeId":"US","location":"?region=US"},{"localeId":"AE","location":"?region=AE"},{"localeId":"RU","location":"?region=RU"}],"isWebTransitionReloadPage":true,"locales":
            [{"id":"AE","displayName":"United Arab Emirates","regionLanguages":[],"platformLocale":"AE"},{"id":"CN","displayName":"China","regionLanguages":[],"platformLocale":"CN"},
                {"id":"JP","displayName":"Japan","regionLanguages":[],"platformLocale":"JP"},{"id":"RU","displayName":"Russia","regionLanguages":[],"platformLocale":"RU"},{"id":"TW","displayName":
                    "Taiwan","regionLanguages":[],"platformLocale":"TW"},{"id":"US","displayName":"United States","regionLanguages":[],"platformLocale":"US"}],
        "css":".oswidget-dropdown-region-current-selection,.oswidget-dropdown-region-current-selection-rtl{background-image:url(https://onesky-locale-widget-web-stag.firebaseapp.com/images/global.png);background-repeat:no-repeat;background-size:19px 19px}.oswidget-dropdown-region{position:relative;display:inline-block}.oswidget-dropdown-region-button{padding:0;font-size:13px;border:none;outline:0;cursor:pointer}.oswidget-dropdown-region-current-selection{border:1px solid #cacaca;background-color:#fafafa;padding:5px 5px 5px 20px;width:170px;background-position:4px 50%}.oswidget-dropdown-region-current-selection-name{width:150px}.oswidget-dropdown-region-arrow{float:right}.oswidget-dropdown-region-content{display:none;position:absolute;min-width:195px;box-shadow:0 2px 4px 0 rgba(0,0,0,.2);border:1px solid #cacaca;z-index:99}.oswidget-dropdown-region-content a{color:#333;padding:10px 10px 10px 32px;text-decoration:none;text-align:left;display:block}.oswidget-dropdown-region-content a:hover{background-color:#ddd;color:#000}.oswidget-dropdown-region:hover .oswidget-dropdown-region-content{display:block;background-color:#fafafa}.oswidget-dropdown-region:hover .oswidget-dropdown-region-button{color:#00a4bd}.oswidget-dropdown-region-rtl{position:relative;display:inline-block}.oswidget-dropdown-region-button-rtl{padding:0;font-size:13px;border:none;outline:0;cursor:pointer}.oswidget-dropdown-region-current-selection-rtl{border:1px solid #cacaca;background-color:#fafafa;padding:5px 20px 5px 5px;width:170px;background-position:171px 50%}.oswidget-dropdown-region-current-selection-name-rtl{width:150px}.oswidget-dropdown-region-arrow-rtl{float:left}.oswidget-dropdown-region-content-rtl{display:none;position:absolute;min-width:195px;box-shadow:0 0 4px 2px rgba(0,0,0,.2);border:1px solid #cacaca;z-index:99}.oswidget-dropdown-region-content-rtl a{color:#333;padding:10px 32px 10px 10px;text-decoration:none;text-align:right;display:block}.oswidget-dropdown-region-content-rtl a:hover{background-color:#ddd;color:#000}.oswidget-dropdown-region-rtl:hover .oswidget-dropdown-region-content-rtl{display:block;background-color:#fafafa}.oswidget-dropdown-region-rtl:hover .oswidget-dropdown-region-button-rtl{color:#00a4bd}"
    }, {
        "type":"interested-regions","htmlTag": "interested-regions-selector","theme":"general",
        "options":["US", "JP", "TW", "RU"],"defaultValue": "US","locales":[{"id":"AE","displayName":"United Arab Emirates","regionLanguages":[],"platformLocale":"AE"},{"id":"CN","displayName":"China","regionLanguages":[],"platformLocale":"CN"},
            {"id":"JP","displayName":"Japan","regionLanguages":[],"platformLocale":"JP"},{"id":"RU","displayName":"Russia","regionLanguages":[],"platformLocale":"RU"},{"id":"TW","displayName":
                    "Taiwan","regionLanguages":[],"platformLocale":"TW"},{"id":"US","displayName":"United States","regionLanguages":[],"platformLocale":"US"}],
        "css":".oswidget-multi-select-checkbox{width:200px}.oswidget-select-option{position:relative}.oswidget-select-option select{width:100%;font-weight:700}.oswidget-select-bg{position:absolute;left:0;right:0;top:0;bottom:0}#oswidget-interested-regions{display:none;border:1px solid #dadada}#oswidget-interested-regions label{display:block}#checkboxes label:hover{background-color:#1e90ff}"
    }];
    console.log("Keep this placeholder mark for selectors code generation: end");
    // End code-gen: Selector of app rule

    window.OsWidget = {
        loaders: new Array(),   // {type: _type, loader: _loader} to be iterated when init
        selectorRenders: new Array(),   // {type: _type, render: _render}

        init: function () {
            document.addEventListener('DOMContentLoaded', function () {
                OsWidget.initWithUrl('display-language');
                OsWidget.initWithUrl('display-region');
                OsWidget.initWithUrl('interested-regions');

                OsWidget.loaders.forEach(function (loaderObject) {
                    loaderObject.loader();
                });
            });
        },

        // when a locale preference is located a few clicks away and the app manipulates the dom after DOMContentLoaded event is fired
        // this fixes the dom event listener fires the DOMContentLoaded event before the document is loaded
        replace: function () {
            OsWidget.initWithUrl('display-language');
            OsWidget.initWithUrl('display-region');
            OsWidget.initWithUrl('interested-regions');
            OsWidget.loaders.forEach(function (loaderObject) {
                loaderObject.loader();
            });
        },

        // handle selector's selected options according to url hostname, path or query
        initWithUrl: function (experienceType) {
            var localeId =
                OsWidget.getUrlQueryLocaleFromMappedLocation(experienceType) ||
                OsWidget.getUrlPathLocaleFromMappedLocation(experienceType) ||
                OsWidget.getUrlHostnameLocaleFromMappedLocation(experienceType);

            var targetLocales = [];

            if (localeId) {

                var targetLocale = null;

                var matchedOption = OsSelectors.find(function (selector) {

                    if (selector.type == experienceType) {
                        // the displayLanguageFromUrl is platform locale, we need to convert it to locale id for matching
                        targetLocale = selector.locales.find(function (locale) {
                            return locale.platformLocale == localeId;
                        });

                        if (targetLocale) {
                            return selector.options.includes(targetLocale.id);
                        }
                        else {
                            console.warn('Platform locale ' + localeId + ' not found for the type ' + experienceType + '.');
                        }
                    }
                });

                // extracted options from URL is valid
                if (matchedOption) {
                    targetLocales.push(targetLocale.id);

                    // remove the current type loader so that it won't be called to override the preference from URL
                    OsWidget.loaders = OsWidget.loaders.filter(function (loaderObject) {
                        return loaderObject.type !== experienceType;
                    });
                }
            }

            // render the selector with the locale value extracted from URL. Even there has no locale matches on URL, the selector will still being rendered
            OsWidget.render(experienceType, targetLocales);
        },

        // to be itereated when init
        addLoader: function (loader) {
            OsWidget.loaders.push(loader);
        },

        // called by other modules
        addSelectorRender: function (selectorRender) {
            OsWidget.selectorRenders.push(selectorRender);
        },

        // called by other modules
        addStyle: function (css) {
            var style = document.createElement("style");
            style.type = "text/css";
            style.innerHTML = css;
            document.head.appendChild(style);
        },

        // get user
        getUser: function () {
            var user = typeof onesky.identifiedUser !== 'undefined' ? onesky.identifiedUser : null;
            if (user) {
                user.id = typeof user.id !== 'undefined' ? user.id : null;
                user.name = typeof user.name !== 'undefined' ? user.name : '';
                user.email = typeof user.email !== 'undefined' ? user.email : '';
            }
            return user;
        },

        // called by init function, render selectors after loaded user's display language preference
        render: function (experienceType, preferencedValues) {
            var selectorRender = OsWidget.selectorRenders.find(function (selectorRenderObject) {
                return selectorRenderObject.type === experienceType;
            });
            selectorRender.render(preferencedValues);
        },

        // called when an option is clicked in selector
        webTransition: function (selector, values) {

            var targetPlatformLocale = values[0];

            var targetLocale = selector.locales.find(function (locale) {
                return locale.platformLocale == targetPlatformLocale;
            });

            if (targetLocale) {
                var mappedTransition = selector.webTransitionMappings.find(function (mapping) {
                    return mapping.localeId == targetLocale.id;
                });

                if (mappedTransition && mappedTransition.location) {

                    var queryComponents = mappedTransition.location.split('=');
                    var isQueryLocation = queryComponents.length == 2;
                    var isHostnameLocation = mappedTransition.location.includes('://');

                    if (isQueryLocation) {
                        // query
                        var parameter = queryComponents[0];
                        parameter = parameter.replace('?', '').replace('&', '');
                        OsWidget.rewriteParameteredUrlWithRefresh(parameter, targetPlatformLocale);
                    }
                    else if (isHostnameLocation) {
                        // hostname changes must need reload
                        window.location.href = mappedTransition.location;
                    }
                    else {
                        // path
                        var urlPathObject = OsWidget.getUrlPathObject(window.location.pathname);
                        OsWidget.rewritePathUrlWithRefresh(mappedTransition.location + urlPathObject.fileName);
                    }
                }
                else {
                    console.warn("Transition location of locale '" + targetLocale.id + "' is not defined.");
                }
            }
        },

        getUrlPathObject: function (fullPath) {
            var noFilePath = fullPath.substring(0, fullPath.lastIndexOf("/"));
            var fileName = fullPath.replace(noFilePath, '');
            return {
                path: noFilePath,
                fileName: fileName
            }
        },

        getUrlQueryParameterValue: function (parameterName) {
            return decodeURIComponent((new RegExp('[?|&]' + parameterName + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null
        },

        getQueryParameterNameFromOutput: function (output) {
            if (output.url && output.url.query) {
                return output.url.query.pattern.split('=')[0];
            }
            return null;
        },

        urlGetAddedParameter: function (url, param, value) {
            var hash = {};
            var parser = document.createElement('a');
            parser.href = url;

            var parameters = parser.search.split(/\?|&/);
            for (var i = 0; i < parameters.length; i++) {
                if (!parameters[i])
                    continue;

                var ary = parameters[i].split('=');
                hash[ary[0]] = ary[1];
            }

            hash[param] = value;

            var list = [];
            Object.keys(hash).forEach(function (key) {
                list.push(key + '=' + hash[key]);
            });

            parser.search = '?' + list.join('&');
            return parser.href;
        },

        // get locale id from url if the hostname matched
        getUrlHostnameLocaleFromMappedLocation: function (experienceType) {

            var hostname = window.location.hostname;

            var selector = OsSelectors.find(function (selector) {
                return selector.type === experienceType;
            });

            var localeFromUrl = '';

            if (selector && selector.webTransitionMappings) {
                selector.webTransitionMappings.map(function (mapping) {
                    if (mapping.location == hostname) {
                        localeFromUrl = mapping.localeId;
                    }
                });
            }

            return localeFromUrl;
        },

        // get locale id from url if the path matched
        getUrlPathLocaleFromMappedLocation: function (experienceType) {

            var urlPathObject = OsWidget.getUrlPathObject(window.location.pathname);

            var selector = OsSelectors.find(function (selector) {
                return selector.type === experienceType;
            });

            var localeFromUrl = '';

            if (selector && selector.webTransitionMappings) {
                selector.webTransitionMappings.map(function (mapping) {
                    if (mapping.location == urlPathObject.path) {
                        localeFromUrl = mapping.localeId;
                    }
                });
            }

            return localeFromUrl;
        },

        // get locale id from url if the query param matched
        getUrlQueryLocaleFromMappedLocation: function (experienceType) {
            // query from url in JSON
            var queryJson = OsWidget.queryStringToJson(window.location.search);

            // url location query params from rules definition
            var queryParams = [];

            // check if the query, path or hostname match the selector mapping locations
            var localeFromUrl = '';

            var selector = OsSelectors.find(function (selector) {
                return selector.type === experienceType;
            });

            if (selector && selector.webTransitionMappings) {
                selector.webTransitionMappings.map(function (mapping) {
                    Object.keys(OsWidget.queryStringToJson(mapping.location)).map(function (key) {
                        if (!queryParams.includes(key)) {
                            queryParams.push(key);
                        }
                    });
                });
            }

            Object.keys(queryJson).map(function (key) {
                if (queryParams.includes(key)) {
                    localeFromUrl = queryJson[key];
                }
            });

            return localeFromUrl;
        },

        queryStringToJson: function (queryString) {
            try {
                return JSON.parse('{"' + queryString.replace('?', '').replace(/=/g, '":"').replace(/&/g, '","') + '"}');
            }
            catch (err) {
                return {};
            }
        },

        rewriteParameteredUrlWithRefresh: function (parameterName, parameterValue) {
            var url = OsWidget.urlGetAddedParameter(location.href, parameterName, parameterValue);
            window.location.href = url;
        },

        rewriteParameteredUrlWithoutRefresh: function (parameterName, parameterValue) {
            var url = OsWidget.urlGetAddedParameter(location.href, parameterName, parameterValue);
            window.history.replaceState({}, 'title', url);
            OsWidget.init();
        },

        rewritePathUrlWithRefresh: function (path) {
            window.location.pathname = path;
        },

        rewritePathUrlWithoutRefresh: function (path) {
            var locationSplit = location.href.split(location.pathname);
            var url = locationSplit[0] + path + locationSplit[1];
            window.history.replaceState({}, 'title', url);
            OsWidget.init();
        }
    },

        window.OsWidgetStylist = {
            renderHtmlSelector: function (htmlTagElement, options, preferencedValue, onChangedCallback) {
                // clean up the element
                htmlTagElement.innerHTML = '';

                // Create SELECT with on change event listener
                var selectorElement = document.createElement('SELECT');
                selectorElement.addEventListener('change', onChangedCallback);
                htmlTagElement.appendChild(selectorElement);

                options.map(function (option) {
                    // TODO: make sure preferencedValue is the platform locale
                    // console.log(option.value + ' vs ' + preferencedValue);
                    var isSelected = (option.value == preferencedValue) ? true : false;
                    var optionElement = document.createElement('OPTION');
                    optionElement.value = option.value;
                    optionElement.text = option.name;
                    optionElement.selected = isSelected;
                    selectorElement.appendChild(optionElement);
                });
            }
        };
}());

/**
 Display Language Module
 */
(function (OsWidget) {

    var _type = 'display-language';
    var _selector = OsAppApi.findAppSelectorByExperienceType(OsSelectors, _type);

    // called by widget init
    var _loader = function () {
        var displayLanguageSelector = OsAppApi.findAppSelectorByExperienceType(OsSelectors, _type);
        OsAppApi.loadUserDisplayLanguage(onesky.app.apiKey, onesky.app.id, OsWidget.getUser(), displayLanguageSelector, function (preferencedValues) {
            OsWidget.render(_type, preferencedValues);
        });
    }

    // called by widget render after the caller loader is loaded
    var _selectorRender = function (preferencedValues) {
        OsWidget.addStyle(_selector.css);
        Array.prototype.slice.call(document.getElementsByTagName(_selector.htmlTag)).map(function (htmlTagElement) {
            var preferencedLocale = _selector.locales.find(function (locale) {
                return locale.id === preferencedValues[0];
            });

            if (preferencedLocale) {
                // Begin reflect preference locale on url by rewriting (no refresh) url path
                var mappedTransition = _selector.webTransitionMappings.find(function (mapping) {
                    return mapping.localeId == preferencedLocale.id;
                });

                if (mappedTransition && mappedTransition.location) {

                    var queryComponents = mappedTransition.location.split('=');
                    var isQueryLocation = queryComponents.length == 2;
                    var isHostnameLocation = mappedTransition.location.includes('://');

                    if (isQueryLocation) {
                        // query
                        var parameter = queryComponents[0];
                        parameter = parameter.replace('?', '').replace('&', '');
                        OsWidget.rewriteParameteredUrlWithoutRefresh(parameter, preferencedLocale.platformLocale);
                    }
                    else if (!isHostnameLocation) {
                        // path
                        var urlPathObject = OsWidget.getUrlPathObject(window.location.pathname);
                        OsWidget.rewritePathUrlWithoutRefresh(mappedTransition.location + urlPathObject.fileName);
                    }
                }
            }
            // End reflect preference locale on url by rewriting (no refresh) url path

            // no selector options match user preferences
            if (typeof preferencedLocale === 'undefined') {
                preferencedLocale = _selector.locales.find(function (locale) {
                    return locale.id === _selector.defaultValue;
                });
            }

            // need to handle language direction issue for display-language experience
            var direction = 'ltr';
            if (typeof preferencedLocale.additionalProperties !== 'undefined') {
                var directionObject = preferencedLocale.additionalProperties.find(function (property) {
                    return property.key === 'direction';
                });
                direction = directionObject.value;
            }

            var directionStyle = document.getElementById("os-direction-style");
            if (directionStyle) {
                directionStyle.innerHTML = '*{direction: ' + direction + ';}';
            }
            else {
                directionStyle = document.createElement("style");
                directionStyle.setAttribute("id", "os-direction-style");
                directionStyle.type = "text/css";
                directionStyle.innerHTML = '*{direction: ' + direction + ';}';
                document.head.appendChild(directionStyle);
            }

            var directionStylePostfix = direction === 'rtl' ? '-rtl' : '';

            // Clean up the element
            htmlTagElement.innerHTML = '';

            if (_selector.theme === 'general') {
                htmlTagElement.appendChild(_generalStyleElement(preferencedLocale, directionStylePostfix));
            }
            else {
                htmlTagElement.appendChild(_nonGeneralStyleElement(preferencedLocale, directionStylePostfix));
            }
        });
    };

    var _onClicked = function (event) {
        // selector option (this.value) is a platform locale
        var platformLocale = this.value;

        var targetLocale = null;
        var direction = null;
        // the displayLanguageFromUrl is platform locale, we need to convert it to locale id for matching
        targetLocale = _selector.locales.find(function (locale) {
            return locale.platformLocale == platformLocale;
        });
        if (targetLocale) {

            if (typeof targetLocale.additionalProperties !== 'undefined') {
                var directionObject = targetLocale.additionalProperties.find(function (property) {
                    return property.key === 'direction';
                });
                direction = directionObject.value;

                var directionStyle = document.getElementById("os-direction-style");
                if (directionStyle) {
                    directionStyle.innerHTML = '*{direction: ' + direction + ';}';
                }
                else {
                    directionStyle = document.createElement("style");
                    directionStyle.setAttribute("id", "os-direction-style");
                    directionStyle.type = "text/css";
                    directionStyle.innerHTML = '*{direction: ' + direction + ';}';
                    document.head.appendChild(directionStyle);
                }
            }
        }

        OsAppApi.saveUserDisplayLanguage(onesky.app.apiKey, onesky.app.id, OsWidget.getUser(), targetLocale.id, function (response) {
            OsWidget.webTransition(_selector, [targetLocale.platformLocale]);
        });
    };

    var _generalStyleElement = function (preferencedLocale, directionStyle) {
        // Create "general" dropdown with on-click event listener
        /** Sample in HTML
            <select>
                <option>Language 1</option>
                <option>Language 2</option>
                <option>Language 3</option>
            </select>
        */

        var selectElement = document.createElement('select');
        selectElement.addEventListener('change', _onClicked);

        if (!_selector.respectOrder.includes('user-input')) {
            selectElement.disabled = true;
            var optionElement = document.createElement('option');
            optionElement.innerHTML = preferencedLocale.displayName;
            optionElement.value = preferencedLocale.platformLocale;
            selectElement.appendChild(optionElement);
        } else {
            _selector.options.map(function (option) {
                var optionLocale = _selector.locales.find(function (locale) {
                    // selector options are in locale id, not platform locale
                    return locale.id === option;
                });

                var optionElement = document.createElement('option');
                optionElement.innerHTML = optionLocale.displayName;
                optionElement.value = optionLocale.platformLocale;
                if (optionLocale.platformLocale == preferencedLocale.platformLocale) {
                    optionElement.selected = true;
                }

                selectElement.appendChild(optionElement);
            });
        }

        return selectElement;
    };

    var _nonGeneralStyleElement = function (preferencedLocale, directionStyle) {
        // Create "non-general" dropdown with on-click event listener
        /** Sample in HTML
            <div class="oswidget-dropdown-language">
              <button class="oswidget-dropdown-language-button">
                <div class="oswidget-dropdown-language-current-selection">
                    <span class="oswidget-dropdown-language-current-selection-name">
                    <div class="oswidget-dropdown-language-arrow">&#x25BE;</div>
                </div>
                <div class="oswidget-dropdown-language-content">
                  <a>Language 1</a>
                  <a>Language 2</a>
                  <a>Language 3</a>
                </div>
              </button>
            </div>
        */
        var dropdownElement = document.createElement('div');
        dropdownElement.className = 'oswidget-dropdown-language' + directionStyle;

        var buttonElement = document.createElement('button');
        buttonElement.className = 'oswidget-dropdown-language-button' + directionStyle;

        var dropdownCurrentLanguageElement = document.createElement('div');
        dropdownCurrentLanguageElement.className = 'oswidget-dropdown-language-current-selection' + directionStyle;

        var dropdownCurrentLanguageNameElement = document.createElement('span');
        dropdownCurrentLanguageNameElement.className = 'oswidget-dropdown-language-current-selection-name' + directionStyle;
        dropdownCurrentLanguageNameElement.innerHTML = preferencedLocale.displayName;

        var dropdownArrowElement = document.createElement('div');
        dropdownArrowElement.className = 'oswidget-dropdown-language-arrow' + directionStyle;
        dropdownArrowElement.innerHTML = '&#x25BE';

        var dropdownContentElement = document.createElement('div');
        dropdownContentElement.className = 'oswidget-dropdown-language-content' + directionStyle;

        dropdownElement.appendChild(buttonElement);
        buttonElement.appendChild(dropdownCurrentLanguageElement);

        if (_selector.respectOrder.includes('user-input')) {
            buttonElement.appendChild(dropdownContentElement);
            dropdownCurrentLanguageElement.appendChild(dropdownCurrentLanguageNameElement);
            dropdownCurrentLanguageElement.appendChild(dropdownArrowElement);

            _selector.options.map(function (option) {

                var optionLocale = _selector.locales.find(function (locale) {
                    return locale.id === option;
                });

                var optionElement = document.createElement('a');
                optionElement.innerHTML = optionLocale.displayName;
                optionElement.value = option;
                optionElement.addEventListener('click', _onClicked);
                dropdownContentElement.appendChild(optionElement);
            });
        }

        return dropdownElement;
    };

    OsWidget.addLoader({ type: _type, loader: _loader });
    OsWidget.addSelectorRender({ type: _type, render: _selectorRender });

    return OsWidget;

})(OsWidget);

/**
 Display Region Module
 */
(function (OsWidget) {

    var _type = 'display-region';
    var _selector = OsAppApi.findAppSelectorByExperienceType(OsSelectors, _type);

    // called by widget init
    var _loader = function () {
        var displayRegionSelector = OsAppApi.findAppSelectorByExperienceType(OsSelectors, _type);
        OsAppApi.loadUserDisplayRegion(onesky.app.apiKey, onesky.app.id, OsWidget.getUser(), displayRegionSelector, function (preferencedValues) {
            OsWidget.render(_type, preferencedValues);
        });
    }

    // called by widget render after the caller loader is loaded
    var _selectorRender = function (preferencedValues) {
        OsWidget.addStyle(_selector.css);
        Array.prototype.slice.call(document.getElementsByTagName(_selector.htmlTag)).map(function (htmlTagElement) {
            var preferencedLocale = _selector.locales.find(function (locale) {
                return locale.id === preferencedValues[0];
            });

            if (preferencedLocale) {
                // Begin reflect preference locale on url by rewriting (no refresh) url path
                var mappedTransition = _selector.webTransitionMappings.find(function (mapping) {
                    return mapping.localeId == preferencedLocale.id;
                });

                if (mappedTransition && mappedTransition.location) {

                    var queryComponents = mappedTransition.location.split('=');
                    var isQueryLocation = queryComponents.length == 2;
                    var isHostnameLocation = mappedTransition.location.includes('://');

                    if (isQueryLocation) {
                        // query
                        var parameter = queryComponents[0];
                        parameter = parameter.replace('?', '').replace('&', '');
                        OsWidget.rewriteParameteredUrlWithoutRefresh(parameter, preferencedLocale.platformLocale);
                    }
                    else if (!isHostnameLocation) {
                        // path
                        var urlPathObject = OsWidget.getUrlPathObject(window.location.pathname);
                        OsWidget.rewritePathUrlWithoutRefresh(mappedTransition.location + urlPathObject.fileName);
                    }
                }
            }
            // End reflect preference locale on url by rewriting (no refresh) url path

            // no selector options match user preferences
            if (typeof preferencedLocale === 'undefined') {
                preferencedLocale = _selector.locales.find(function (locale) {
                    return locale.id === _selector.defaultValue;
                });
            }

            // need to handle language direction issue for display-language experience
            var direction = 'ltr';
            if (typeof preferencedLocale.additionalProperties !== 'undefined') {
                var directionObject = preferencedLocale.additionalProperties.find(function (property) {
                    return property.key === 'direction';
                });
                direction = directionObject.value;
            }

            var directionStyle = document.getElementById("os-direction-style");
            if (directionStyle) {
                directionStyle.innerHTML = '*{direction: ' + direction + ';}';
            }
            else {
                directionStyle = document.createElement("style");
                directionStyle.setAttribute("id", "os-direction-style");
                directionStyle.type = "text/css";
                directionStyle.innerHTML = '*{direction: ' + direction + ';}';
                document.head.appendChild(directionStyle);
            }

            var directionStylePostfix = direction === 'rtl' ? '-rtl' : '';

            // Clean up the element
            htmlTagElement.innerHTML = '';

            if (_selector.theme === 'general') {
                htmlTagElement.appendChild(_generalStyleElement(preferencedLocale, directionStylePostfix));
            }
            else {
                htmlTagElement.appendChild(_nonGeneralStyleElement(preferencedLocale, directionStylePostfix));
            }
        });
    };

    var _onClicked = function (event) {
        // selector option (this.value) is a platform locale
        var platformLocale = this.value;

        var targetLocale = null;
        var direction = null;
        // the displayLanguageFromUrl is platform locale, we need to convert it to locale id for matching
        targetLocale = _selector.locales.find(function (locale) {
            return locale.platformLocale == platformLocale;
        });
        if (targetLocale) {

            if (typeof targetLocale.additionalProperties !== 'undefined') {
                var directionObject = targetLocale.additionalProperties.find(function (property) {
                    return property.key === 'direction';
                });
                direction = directionObject.value;

                var directionStyle = document.getElementById("os-direction-style");
                if (directionStyle) {
                    directionStyle.innerHTML = '*{direction: ' + direction + ';}';
                }
                else {
                    directionStyle = document.createElement("style");
                    directionStyle.setAttribute("id", "os-direction-style");
                    directionStyle.type = "text/css";
                    directionStyle.innerHTML = '*{direction: ' + direction + ';}';
                    document.head.appendChild(directionStyle);
                }
            }
        }

        OsAppApi.saveUserDisplayRegion(onesky.app.apiKey, onesky.app.id, OsWidget.getUser(), targetLocale.id, function (response) {
            OsWidget.webTransition(_selector, [targetLocale.platformLocale]);
        });
    };

    var _generalStyleElement = function (preferencedLocale, directionStyle) {
        // Create "general" dropdown with on-click event listener
        /** Sample in HTML
         <select>
            <option>Region 1</option>
            <option>Region 2</option>
            <option>Region 3</option>
         </select>
         */

        var selectElement = document.createElement('select');
        selectElement.addEventListener('change', _onClicked);

        if (!_selector.respectOrder.includes('user-input')) {
            selectElement.disabled = true;
            var optionElement = document.createElement('option');
            optionElement.innerHTML = preferencedLocale.displayName;
            optionElement.value = preferencedLocale.platformLocale;
            selectElement.appendChild(optionElement);
        } else {
            _selector.options.map(function (option) {
                var optionLocale = _selector.locales.find(function (locale) {
                    // selector options are in locale id, not platform locale
                    return locale.id === option;
                });

                var optionElement = document.createElement('option');
                optionElement.innerHTML = optionLocale.displayName;
                optionElement.value = optionLocale.platformLocale;
                if (optionLocale.platformLocale == preferencedLocale.platformLocale) {
                    optionElement.selected = true;
                }

                selectElement.appendChild(optionElement);
            });
        }

        return selectElement;
    };

    var _nonGeneralStyleElement = function (preferencedLocale, directionStyle) {
        // Create "non-general" dropdown with on-click event listener
        /** Sample in HTML
         <div class="oswidget-dropdown-region">
            <button class="oswidget-dropdown-region-button">
                <div class="oswidget-dropdown-region-current-selection">
                    <span class="oswidget-dropdown-region-current-selection-name">
                    <div class="oswidget-dropdown-region-arrow">&#x25BE;</div>
                    </div>
                    <div class="oswidget-dropdown-region-content">
                    <a>Region 1</a>
                    <a>Region 2</a>
                    <a>Region 3</a>
                </div>
            </button>
         </div>
         */
        var dropdownElement = document.createElement('div');
        dropdownElement.className = 'oswidget-dropdown-region' + directionStyle;

        var buttonElement = document.createElement('button');
        buttonElement.className = 'oswidget-dropdown-region-button' + directionStyle;

        var dropdownCurrentRegionElement = document.createElement('div');
        dropdownCurrentRegionElement.className = 'oswidget-dropdown-region-current-selection' + directionStyle;

        var dropdownCurrentRegionNameElement = document.createElement('span');
        dropdownCurrentRegionNameElement.className = 'oswidget-dropdown-region-current-selection-name' + directionStyle;
        dropdownCurrentRegionNameElement.innerHTML = preferencedLocale.displayName;

        var dropdownArrowElement = document.createElement('div');
        dropdownArrowElement.className = 'oswidget-dropdown-region-arrow' + directionStyle;
        dropdownArrowElement.innerHTML = '&#x25BE';

        var dropdownContentElement = document.createElement('div');
        dropdownContentElement.className = 'oswidget-dropdown-region-content' + directionStyle;

        dropdownElement.appendChild(buttonElement);
        buttonElement.appendChild(dropdownCurrentRegionElement);

        if (_selector.respectOrder.includes('user-input')) {
            buttonElement.appendChild(dropdownContentElement);
            dropdownCurrentRegionElement.appendChild(dropdownCurrentRegionNameElement);
            dropdownCurrentRegionElement.appendChild(dropdownArrowElement);

            _selector.options.map(function (option) {

                var optionLocale = _selector.locales.find(function (locale) {
                    return locale.id === option;
                });

                var optionElement = document.createElement('a');
                optionElement.innerHTML = optionLocale.displayName;
                optionElement.value = option;
                optionElement.addEventListener('click', _onClicked);
                dropdownContentElement.appendChild(optionElement);
            });
        }

        return dropdownElement;
    };

    OsWidget.addLoader({ type: _type, loader: _loader });
    OsWidget.addSelectorRender({ type: _type, render: _selectorRender });

    return OsWidget;

})(OsWidget);

/**
 Interested Regions Module
 */
(function (OsWidget) {

    var _type = 'interested-regions';
    var _selector = OsAppApi.findAppSelectorByExperienceType(OsSelectors, _type);
    var _expanded = false;

    // called by widget init
    var _loader = function () {
        var interestedRegionsSelector = OsAppApi.findAppSelectorByExperienceType(OsSelectors, _type);
        OsAppApi.loadUserInterestedRegions(onesky.app.apiKey, onesky.app.id, OsWidget.getUser(), interestedRegionsSelector, function (preferencedValues) {
            OsWidget.render(_type, preferencedValues);
        });
    }

    // called by widget render after the caller loader is loaded
    var _selectorRender = function (preferencedValues) {
        OsWidget.addStyle(_selector.css);
        Array.prototype.slice.call(document.getElementsByTagName(_selector.htmlTag)).map(function (htmlTagElement) {
            var preferencedLocales = _selector.locales.filter(function (locale) {
                return preferencedValues.includes(locale.id);
            });

            // no selector options match user preferences
            if (preferencedLocales.length === 0) {
                preferencedLocales = _selector.locales.filter(function (locale) {
                    return locale.id === _selector.defaultValue;
                });
            }

            // Clean up the element
            htmlTagElement.innerHTML = '';

            if (_selector.theme === 'general') {
                htmlTagElement.appendChild(_generalStyleElement(preferencedLocales));
            }
            else {
                htmlTagElement.appendChild(_nonGeneralStyleElement(preferencedLocales));
            }
        });
    };

    var _onClicked = function (event) {

        var checkboxes = document.getElementById("interested-regions");
        if (!_expanded) {
            checkboxes.style.display = "block";
            _expanded = true;
        } else {
            checkboxes.style.display = "none";
            _expanded = false;
            OsAppApi.saveUserInterestedRegions(onesky.app.apiKey, onesky.app.id, OsWidget.getUser(), targetLocale.id, function (response) {
            });
        }

    };

    var _generalStyleElement = function (preferencedLocales) {
        // Create "general" dropdown with on-click event listener
        /** Sample in HTML
         <form>
            <div class="oswidget-multi-select-checkbox">
               <div class="oswidget-select-option"">
                   <select>
                       <option>Select an option</option>
                   </select>
                   <div class="oswidget-select-bg"></div>
               </div>
               <div id="oswidget-interested-regions">
                   <label for="US">
                       <input type="checkbox" id="US" />US
                   </label>
                   <label for="HK">
                       <input type="checkbox" id="HK" />HK
                   </label>
                   <label for="TH">
                       <input type="checkbox" id="TH" />TH
                   </label>
               </div>
            </div>
         </form>
         */

        var formElement = document.createElement('form');
        var multiSelectCheckboxDivElement = document.createElement('div');
        var selectOptionDivElement = document.createElement('div');
        var interestedRegionsDivElement = document.createElement('div');
        var selectElement = document.createElement('select');
        var optionElement = document.createElement('option');
        var selectBgDivElement = document.createElement('div');

        _selector.options.map(function (option) {
            var optionLocale = _selector.locales.find(function (locale) {
                // selector options are in locale id, not platform locale
                return locale.id === option;
            });

            var label = document.createElement('label');
            label.htmlFor = optionLocale.platformLocale;

            var inputElement = document.createElement('input');
            inputElement.setAttribute('type', 'checkbox');
            inputElement.setAttribute('id', optionLocale.platformLocale);
            label.appendChild(inputElement);
            var labelText = document.createTextNode(optionLocale.displayName);
            label.appendChild(labelText);

            let optionLocaleSelected = preferencedLocales.find(function (preferencedLocale) {
                return optionLocale.platformLocale == preferencedLocale.platformLocale;
            });
            if (optionLocaleSelected) {
                inputElement.checked = true;
            }
            interestedRegionsDivElement.appendChild(label);
        });

        optionElement.innerHTML = 'Select interested regions';
        selectElement.appendChild(optionElement);
        selectBgDivElement.className = 'oswidget-select-bg';
        selectOptionDivElement.className = 'oswidget-select-option';
        selectOptionDivElement.appendChild(selectElement);
        selectOptionDivElement.appendChild(selectBgDivElement);
        selectOptionDivElement.addEventListener('click', _onClicked);

        multiSelectCheckboxDivElement.className = 'oswidget-multi-select-checkbox';
        interestedRegionsDivElement.setAttribute('id', 'interested-regions');

        multiSelectCheckboxDivElement.appendChild(selectOptionDivElement);
        multiSelectCheckboxDivElement.appendChild(interestedRegionsDivElement);
        formElement.appendChild(multiSelectCheckboxDivElement);

        return formElement;
    };

    var _nonGeneralStyleElement = function (preferencedLocale, directionStyle) {
        // Create "non-general" dropdown with on-click event listener
        /** Sample in HTML
         <div class="oswidget-dropdown-region">
         <button class="oswidget-dropdown-region-button">
         <div class="oswidget-dropdown-region-current-selection">
         <span class="oswidget-dropdown-region-current-selection-name">
         <div class="oswidget-dropdown-region-arrow">&#x25BE;</div>
         </div>
         <div class="oswidget-dropdown-region-content">
         <a>Region 1</a>
         <a>Region 2</a>
         <a>Region 3</a>
         </div>
         </button>
         </div>
         */
        var dropdownElement = document.createElement('div');
        dropdownElement.className = 'oswidget-dropdown-region' + directionStyle;

        var buttonElement = document.createElement('button');
        buttonElement.className = 'oswidget-dropdown-region-button' + directionStyle;

        var dropdownCurrentRegionElement = document.createElement('div');
        dropdownCurrentRegionElement.className = 'oswidget-dropdown-region-current-selection' + directionStyle;

        var dropdownCurrentRegionNameElement = document.createElement('span');
        dropdownCurrentRegionNameElement.className = 'oswidget-dropdown-region-current-selection-name' + directionStyle;
        dropdownCurrentRegionNameElement.innerHTML = preferencedLocale.displayName;

        var dropdownArrowElement = document.createElement('div');
        dropdownArrowElement.className = 'oswidget-dropdown-region-arrow' + directionStyle;
        dropdownArrowElement.innerHTML = '&#x25BE';

        var dropdownContentElement = document.createElement('div');
        dropdownContentElement.className = 'oswidget-dropdown-region-content' + directionStyle;

        dropdownElement.appendChild(buttonElement);
        buttonElement.appendChild(dropdownCurrentRegionElement);

        if (_selector.respectOrder.includes('user-input')) {
            buttonElement.appendChild(dropdownContentElement);
            dropdownCurrentRegionElement.appendChild(dropdownCurrentRegionNameElement);
            dropdownCurrentRegionElement.appendChild(dropdownArrowElement);

            _selector.options.map(function (option) {

                var optionLocale = _selector.locales.find(function (locale) {
                    return locale.id === option;
                });

                var optionElement = document.createElement('a');
                optionElement.innerHTML = optionLocale.displayName;
                optionElement.value = option;
                optionElement.addEventListener('click', _onClicked);
                dropdownContentElement.appendChild(optionElement);
            });
        }

        return dropdownElement;
    };

    OsWidget.addLoader({ type: _type, loader: _loader });
    OsWidget.addSelectorRender({ type: _type, render: _selectorRender });

    return OsWidget;

})(OsWidget);

// Init Locale Widget
(function () {
    OsWidget.init();
}());
