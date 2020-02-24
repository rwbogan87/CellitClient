import React, { Component } from 'react'
import { Pane } from 'evergreen-ui';
import Login from '../auth/Login';
// import Signup from '../auth/Signup';
import SignupModal from '../auth/SignupModal';
import {
    BrowserRouter as Router,
  } from 'react-router-dom';

export class Auth extends Component {
    render() {
        return (
           <Pane>
               <br/>
               <div className = "login">
               <Login/>
               {/* token={token} */}
               </div>
               <div className = "signup">
            {/* Modal being used instead of signup */}
               {/* <Signup/> */}
               {/* token={token} */}
               </div>
               <SignupModal/>
           </Pane>
        )
    }
}

export default Auth
