import React, { Component, SyntheticEvent } from "react";
import './SignupModal.css';
import Popup from "reactjs-popup";
import { Button, FormField, TextInput } from 'evergreen-ui';

interface ISignupprops {
    setToken: (token: string)=>void;
}

interface ISignupstate {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    street: string;
    city: string;
    zip: number;
    phone: string;
    admin: boolean;
}

class SignupModal extends Component<ISignupprops, ISignupstate> {
    constructor(props: any) {
        super(props);
        this.state={
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            street: "",
            city: "",
            zip: 0,
            phone: "",
            admin: false
        }
    }

    userCreate=(e: SyntheticEvent)=>{
        e.preventDefault();
        fetch('http://localhost:8000/user/signup', {
            method: "POST",
            body: JSON.stringify({
                firstname: this.state.firstname,
                lastname: this.state.lastname,
                email: this.state.email,
                password: this.state.password,
                street: this.state.street,
                city: this.state.city,
                zip: this.state.zip,
                phone: this.state.phone,
                admin: false
        }),
            headers: new Headers({
            "Content-Type": "application/json"
        })
    }).then(res=>res.json())
    .then(data=>{
        console.log(data);
        this.props.setToken(data.sessionToken);
        localStorage.setItem('token', data.sessionToken)
    }).catch(err=>console.log("Error: invalid user creation", err))
}

    render() {
    return (
    <Popup trigger={<button> New User </button>} position="right center" className="popupmodal">
        <FormField className="signupform" label="signupform" onSubmit={(e: any)=>this.userCreate(e)}>
                <h3>Create Account</h3>

            <TextInput width="20em" className="signupinputs" placeholder="First Name" type="text" 
                // value={this.state.firstname} feels needed but its not?
                onChange={(e: any)=>this.setState({ firstname: e.target.value })}
            /><br /><br />

            <TextInput width="20em" className="signupinputs" placeholder="Last Name" type="text"
                // value={this.state.lastname}
                onChange={(e: any)=>this.setState({ lastname: e.target.value })}
            /><br /><br />

            <TextInput width="20em" className="signupinputs" placeholder="Email Address" type="email"
                // value={this.state.email}
                onChange={(e: any)=>this.setState({ email: e.target.value })}
            /><br /><br />

            <TextInput width="20em" className="signupinputs" placeholder="Password" type="password"
                // value={this.state.password}
                onChange={(e: any)=>this.setState({ password: e.target.value })}
            /><br /><br />
            
            <TextInput width="20em" className="signupinputs" placeholder="Street" type="text"
                // value={this.state.street}
                onChange={(e: any)=>this.setState({ street: e.target.value })}
            /><br /><br />
            
            <TextInput width="20em" className="signupinputs" placeholder="City" type="text"
                // value={this.state.city}
                onChange={(e: any)=>this.setState({ city: e.target.value })}
            /><br /><br />

            <TextInput width="20em" className="signupinputs" placeholder="Zip" type="number"
                // value={this.state.zip}
                onChange={(e: any)=>this.setState({ zip: e.target.value })}
            /><br /><br />

            <TextInput width="20em" className="signupinputs" placeholder="Phone" type="text"
                // value={this.state.phone}
                onChange={(e: any)=>this.setState({ phone: e.target.value })}
            />  
            {/* admin stays false (requires manual entry by super user) */}
            <br/><br/>
            <Button onClick={(e: SyntheticEvent) => this.userCreate(e)} className="submitbutton" type="submit">Submit</Button>

        </FormField>
    </Popup>
    )}
};

export default SignupModal;