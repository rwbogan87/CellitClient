import React, { Component, SyntheticEvent } from 'react'
import './Login.css'
import { Button, Pane, FormField, TextInput } from 'evergreen-ui';


// sets up token to be passed
interface ILoginProps {
    setToken: (token: string) => void;
    setName: (name: string) => void;
}

// sets up state for login fields
interface ILoginState {
    email: string;
    password: string;
}


class Login extends Component<ILoginProps, ILoginState> {
    // allows props and state to be used
    constructor(props: ILoginProps) {
        super(props);
        this.state={
            email: "",
            password: ""
        };
    }

    // signin fetch
    userLogin=(e: SyntheticEvent) => {
        e.preventDefault();
        fetch('http://localhost:8000/user/signin', {
            method: 'POST',
            headers: new Headers({
                "Content-Type" : "application/json"
            }),
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then(res => res.json())
        .then(data => {
            // console.log(data);
            console.log("id: ", data.user.id, "admin: ", data.user.admin)

            console.log(`Welcome, ${data.user.firstname}`)
            // pass the dang token through
            this.props.setToken(data.sessionToken);
            this.props.setName(data.user.firstname);
            // this.props.admin(data.user.admin);
            localStorage.setItem('token', data.sessionToken);
            localStorage.setItem('userID', data.user.id )
            localStorage.setItem('activename', data.user.firstname);

            localStorage.setItem('admin',data.user.admin)
            window.location.reload(false);
        })
            .catch(err => console.log("Error: invalid signin attempt", err))
            ;

        };
    
    render() {
    return (
        // input Form
        <Pane>
            <FormField className="Loginform" label="Login" border="2px solid white">
                <h3>Welcome Back</h3>
                    {/* Email */}
                    <TextInput width="20em" className="logininputs" placeholder="Email" value={this.state.email} type="email" onChange={(e: any)=>this.setState({email: e.target.value})}/>
                    <br /><br />
                    {/* Password */}
                    <TextInput width="20em" className="logininputs" placeholder="Password" value={this.state.password} type="password" onChange={(e: any)=>this.setState({password: e.target.value})}/>
                    <br /><br />
                <Button onClick={(e: SyntheticEvent) => this.userLogin(e)} className="submitbutton" type="submit">Submit</Button>
                <br />
            </FormField>
        </Pane>
    )
    }
}


export default Login
