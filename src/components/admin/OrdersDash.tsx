import React, { Component } from 'react'
import { Pane, Button, Heading } from 'evergreen-ui';
import './Admin.css'
import Order from './OrderItem'


export class OrdersDash extends Component {
    render() {
        return (
            <div  className="dash">
                <Pane>
                    <h3>Orders</h3>
                </Pane>
                
            </div>
        )
    }
}

export default OrdersDash
