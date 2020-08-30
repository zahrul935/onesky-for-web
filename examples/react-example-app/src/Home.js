import React from 'react';
import HtmlComponent from "./Html";
import { NavLink } from "react-router-dom";
class Home extends React.Component {
    render() {
       return (
          <div>
             {/* <nav>
               <NavLink className="nav-link" to="/region/jp">Japan</NavLink>
             </nav> */}
             <h1>Home</h1>
             <HtmlComponent region="Home" />
          </div>
       )
    }
 }
 export default Home;