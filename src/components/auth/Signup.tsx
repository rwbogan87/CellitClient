import React, { Component } from 'react'
import './Signup.css';
import { Pane, FormField, TextInput } from 'evergreen-ui';

export class Signup extends Component {
    render() {
        return (
            <Pane>
                <FormField className = "Signupform">
                    <h3>Create Account</h3>
                <TextInput width = "20em" className = "signupinputs" placeholder = "First Name"
                    // onchange={e=>this.setState({ value: e.target.value })}
                    // value={state.value}
                />
                <br /><br />
                <TextInput width = "20em" className = "signupinputs" placeholder = "Last Name"
                    // onchange={e=>this.setState({ value: e.target.value })}
                    // value={state.value}
                />
                <br /><br />
                <TextInput width = "20em" className = "signupinputs" placeholder = "Email Address"
                    // onchange={e=>this.setState({ value: e.target.value })}
                    // value={state.value}
                />
                <br /><br />
                <TextInput width = "20em" className = "signupinputs" placeholder = "Password"
                    // onchange={e=>this.setState({ value: e.target.value })}
                    // value={state.value}
                />
                <br /><br />
                <TextInput width = "20em" className = "signupinputs" placeholder = "Shipping"
                    // onchange={e=>this.setState({ value: e.target.value })}
                    // value={state.value}
                />
                <br /><br />
                <TextInput width = "20em" className = "signupinputs" placeholder = "Shipping2"
                    // onchange={e=>this.setState({ value: e.target.value })}
                    // value={state.value}
                />
                </FormField>
            </Pane>
        )
    }
}

export default Signup
