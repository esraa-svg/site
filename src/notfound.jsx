import React, { Component } from 'react';
import notstyle from './notfound.module.css';
class NotFound extends Component {
    state = {  }
    render() { 
        return ( <section className="vh-100 d-flex justify-content-center align-items-center">
            <h1 className="text-center" className={notstyle.bigfont}> 404 Page</h1>
        </section> );
    }
}
 
export default NotFound;