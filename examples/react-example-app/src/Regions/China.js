import React from 'react';
import HtmlComponent from "../Html";
class RegionChina extends React.Component {
    render() {
       return (
          <div>
             <h1>Region - China</h1>
             <HtmlComponent region="China" />
          </div>
       )
    }
 }
 export default RegionChina;