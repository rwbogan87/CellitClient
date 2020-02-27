import React, { Component } from 'react'
import { Pane, Button, Heading } from 'evergreen-ui';
import './Admin.css'
import User from './User'


export class UsersDash extends Component {
    render() {
        return (
            <div  className="dash">
                <Pane>
                    <h3>Users</h3>
                </Pane>
                
            </div>
        )
    }
}

export default UsersDash
