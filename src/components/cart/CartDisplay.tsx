import React from 'react'
import {Pane, Button} from 'evergreen-ui'

interface Iprops{
    name: string
    description: string;
    price: number;
    quantity: number;
    weight: number;
    onsale: string;
}

const CartDisplay = (props: Iprops) => {


const quantityUpdate = (value: any) => {
 props.quantity = value
}




    return(
        <div>
        <Pane>
            <h1>{props.name}</h1>
            <p>Description: {props.description}</p>
            <p>Price: {props.price}</p>
            <p>Quantity: <input value={props.quantity} type='number' onChange={e => quantityUpdate(e.target.value)} style={{width: '2em'}}/> </p>
            <Button>Delete</Button>
        </Pane>
        </div>
    )
}

export default CartDisplay
