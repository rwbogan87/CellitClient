import React, { Component } from 'react'
import { Pane } from 'evergreen-ui';
import Login from '../auth/Login';
import Signup from '../auth/Signup';



export class Auth extends Component {
    render() {
        return (
           <Pane>
               Auth Component
               <Login/>
               <Signup/>
           </Pane>
        )
    }
}

export default Auth
