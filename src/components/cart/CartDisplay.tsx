import React, { Component } from 'react'
import {Pane, Button, Text} from 'evergreen-ui'

interface Iprops{
    name: string
    description: string;
    price: number;
    quantity: number;
    weight: number;
    onsale: string;
}

const CartDisplay = (props: Iprops) => {
    return(
        <div>
        <Pane>
            <h1>{props.name}</h1>
            <p>Description: {props.description}</p>
            <p>Price: {props.price}</p>
            <p>Quantity: {props.quantity}</p>
            <Button>Delete</Button>
            <Button>Change Quantity</Button>
        </Pane>
        </div>
    )
}

export default CartDisplay
