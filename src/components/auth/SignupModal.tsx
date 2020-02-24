import React, { Component } from "react";
import './SignupModal.css';
import Popup from "reactjs-popup";
import { FormField, TextInput } from 'evergreen-ui';

export class SignupModal extends Component {
    render() {
    return (
    <Popup trigger={<button> New User </button>} position="right center" className="popupmodal">
        <FormField className = "signupform">
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
    </Popup>
    )}
};

export default SignupModal;