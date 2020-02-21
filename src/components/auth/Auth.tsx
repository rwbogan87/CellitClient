import React, { Component } from 'react'
import { Pane } from 'evergreen-ui';
import Login from '../auth/Login';
import Signup from '../auth/Signup';
import {
    BrowserRouter as Router,
  } from 'react-router-dom';

export class Auth extends Component {
    render() {
        return (
           <Pane>
               *Auth Component*
               <div className = "login">
               <Login/>
               </div>
               <div className = "signup">
               <Signup/>
               </div>
           </Pane>
        )
    }
}

export default Auth
