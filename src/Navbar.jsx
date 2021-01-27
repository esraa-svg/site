import React, { Component } from 'react';
// import logo from './images/game.png';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,NavLink,
    Redirect
  } from "react-router-dom";
class Navbar extends Component {
    state = {  }
    render() { 
        return (<nav class="navbar navbar-expand-lg navbar-dark bg-transparent">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
              <NavLink className="nav-link" to="/home">Home </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/movies">Movies</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/tv">Tv</NavLink>
            </li>
          
      
          </ul>
       
        </div>
      </nav> );
    }
}
 
export default Navbar;