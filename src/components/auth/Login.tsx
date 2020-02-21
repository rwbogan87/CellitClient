import React, { Component } from 'react'
import './Login.css'
import { Pane, FormField, Button, Label, TextInput } from 'evergreen-ui';

export class Login extends Component {
    render() {
        return (
            <Pane>
                <FormField 
                className = "Loginform"
                border = "2px solid white"
                >
                    <h3>Welcome Back</h3>
                <TextInput 
                width = "20em" 
                className = "logininputs" 
                placeholder = "Email Address"
                background= "tint3"
                    // onchange={e=>this.setState({ value: e.target.value })}
                    // value={state.value}
                />
                <br /><br />
                <TextInput 
                width = "20em" 
                className = "logininputs" 
                placeholder = "Password"
                    // onchange={e=>this.setState({ value: e.target.value })}
                    // value={state.value}
                />
                <br /><br />
                </FormField>
            </Pane>
        )
    }
}

export default Login
