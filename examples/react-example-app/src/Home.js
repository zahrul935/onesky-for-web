import React from 'react';
import HtmlComponent from "./Html";
class Home extends React.Component {
    render() {
       return (
          <div>
             <h1>Home</h1>
             <HtmlComponent region="Home" />
          </div>
       )
    }
 }
 export default Home;