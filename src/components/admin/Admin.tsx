import React, { Component } from 'react'
import Inventory from './InventoryDash';
import Orders from './OrdersDash';
import Users from './UsersDash';
import './Admin.css'
import { Pane, Button, Heading } from 'evergreen-ui';


export class Admin extends Component {
    render() {
        return (
            <div>
               <h2>Store Dashboard</h2> 
                <Orders/>
                <Users/>
                <Inventory/>
                
            </div>
        )
    }
}

export default Admin
