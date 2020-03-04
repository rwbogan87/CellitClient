import React, { Component } from 'react'
import { Pane, Button, Heading, Card } from 'evergreen-ui';
import './Admin.css'
import User from './User'


interface UserState {
    userData: any
}

interface UserProps {

}

export class UsersDash extends Component <UserProps, UserState> {
    constructor(props: UserProps) {
        super(props);
        this.state={
            userData: []
        };
    }

    componentDidMount(){

        fetch(`http://localhost:8000/user/allusers`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
            })
        }).then(
            (res) => res.json()
        ).then(
            (userData) => {this.userMapper(userData); this.setState({userData: userData})}
        )
        }
    
    userMapper = (userData: any) => {
        return userData.map((userData: any) =>
        {console.log(userData)
        return (<Pane>
            <p>{userData.firstname} {userData.lastname}</p>
            <p>{userData.email}</p>
            <p>{userData.street}, {userData.city} {userData.zip}</p>
            <p>{userData.phone}</p>
                </Pane>)}
        )}
    
    render() {
        return (
            <div  className="dash">
                <Pane>
                    <h1>User Dashboard</h1>
                    {this.userMapper(this.state.userData)}
                </Pane>
                
            </div>
        )
    }
}

export default UsersDash
