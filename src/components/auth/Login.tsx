import React, { useState } from 'react'
import './Login.css'
import { Button, Pane, FormField, TextInput } from 'evergreen-ui';

function Login(): JSX.Element {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any): void => {
        e.preventDefault()
        setEmail('')
        setPassword('')
    }

    return (
        <Pane>
            <FormField className = "Loginform" border = "2px solid white">
                <h3>Welcome Back</h3>
                    <TextInput width = "20em" className = "logininputs" placeholder = "Email" value={email} type = "email" onChange={(e: any)=>setEmail(e.target.value)} required/>
                    <br /><br />
                    <TextInput width = "20em" className = "logininputs" placeholder = "Password" value={password} type = "password" onChange={(e:any)=>setPassword(e.target.value)} required/>
                    <br /><br />
                <Button className="submitbutton" type="submit">Submit</Button>
                <br />
            </FormField>
        </Pane>
    )
}


export default Login
