import React from 'react';
import './CartDisplay.css';
import {Pane, Button} from 'evergreen-ui'

interface Iprops{
    name: string
    description: string;
    price: number;
    quantity: string;
    weight: number;
    onsale: string;
    quantitymaker: (value: any, cartitem: any) => void;
    cartitemId: any;
    token: any;
    deleteme: (data: number) => void;
}

const CartDisplay = (props: Iprops) => {


const quantityMaker = (value: any) => {
 props.quantitymaker(value, props.cartitemId)
}

const deleteCart = (data: any) => {
    props.deleteme(data)
}

    return(
        <Pane className="CartDisplayparent">
            <Pane className="CartDisplay">
                <h1>{props.name}</h1>
                <p>Description: {props.description}</p>
                <p>Price: {props.price}</p>
                <p>Quantity: <input type='number' value={props.quantity} onChange={e => quantityMaker(e.target.value)} style={{width: '3em'}}/></p>
                <Button onClick={() => deleteCart(props.cartitemId)}>Delete</Button>
            </Pane>
        </Pane>
    )
}

export default CartDisplay
