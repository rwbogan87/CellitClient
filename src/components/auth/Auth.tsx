import React, { Component } from 'react'
import { Pane } from 'evergreen-ui';
import Login from '../auth/Login';
import SignupModal from '../auth/SignupModal';

interface IProps {
    setToken: (token: string) => void;
    setName: (name: string) => void;
}

class Auth extends Component<IProps> {

    render() {
        return (
           <Pane>
               <br/>
               <div className = "login">
               <Login 
               setToken={this.props.setToken}
               setName={this.props.setName}
               />
               {/* token={token} */}
               </div>
               <div className = "signup">
            {/* Modal being used instead of signup */}
               {/* <Signup/> */}
               {/* token={token} */}
               <SignupModal setToken={this.props.setToken}/>
               </div>
           </Pane>
        )
    }
}

export default Auth
