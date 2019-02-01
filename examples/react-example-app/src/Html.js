import React, { Component } from 'react';
import intl from 'react-intl-universal';
import util from './util'

class HtmlComponent extends Component {
    render() {
        let { region } = this.props;
        let price = 123456.78;
        let start = new Date();
        let end = new Date();
        let expires = new Date();
        return (
            <div>
                {
                    region && (
                        <p>Redirected to { region } site</p>
                    )
                }
                <p>{intl.get('SIMPLE')}</p>
                <p>{intl.get('HELLO', {name:'User', where:'OneSky'})}</p>
                <p>{intl.get("PHOTO", { photoNum: 0 })}</p>
                <p>{intl.get("PHOTO", { photoNum: 1 })}</p>
                <p>{intl.get("PHOTO", { photoNum: 1000000 })}</p>
                <p>{intl.getHTML('TIP')}</p>
                <p>{intl.getHTML('TIP_VAR', {message: 'HTML with variables'})}</p>
                <p>{intl.getHTML('TIP_VAR', {message: '<script>alert("ReactIntlUniversal prevents from xss attack")</script>'})}</p>
                <p>{intl.get('SALE_START', {start})}</p>
                <p>{intl.get('SALE_END', {end})}</p>
                <p>{intl.get('COUPON', {expires})}</p>
                <p>{intl.get('SALE_PRICE', {price})}</p>
                <p className="title">Message Not in Component Example: {util.getMessage()}</p>
          </div>
        )
    }
}

export default HtmlComponent;