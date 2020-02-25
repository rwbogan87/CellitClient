import React, { Component } from 'react'
import { Pane } from 'evergreen-ui';
import Login from '../auth/Login';
import SignupModal from '../auth/SignupModal';

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
               <SignupModal/>
               </div>
           </Pane>
        )
    }
}

export default Auth
