import React, { Component } from 'react'
import { Pane } from 'evergreen-ui';
import Login from '../auth/Login';
import SignupModal from '../auth/SignupModal';
import { Redirect } from 'react-router-dom';

interface IProps {
    setToken: (token: string) => void;
    setName: (name: string) => void;
    sessionToken: string;
}

interface AuthState {
    loggedin: boolean
}

class Auth extends Component<IProps, AuthState> {
    constructor(props: any){
        super(props);
        this.state={
            loggedin: false
        }
    }

    switcher = () => {
       return localStorage.getItem('token') ? console.log('Hi') : <></>
    }

    render() {
        {this.switcher()}
        return (
           <Pane className="authpane">
               <br/>
               <div className = "login">
               <Login 
            //    admin={this.props.admin}
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
