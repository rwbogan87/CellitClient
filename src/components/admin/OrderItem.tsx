import React from 'react'
import { Pane, Button, Heading } from 'evergreen-ui';

interface IProps{
    id: number;
    street: string;
    city: string;
    zip: number;
    phone: string;
    firstname: string;
    lastname: string;
    userId: number;
    // update: ()=> any;
}

const OrderItem =(props: IProps)=> {
        return (
            <div >
               <Pane textAlign="left" margin={20} className="order" >
                   <Pane>Order#: {props.id} </Pane> <Pane>Order User: {props.userId}</Pane><Pane> {props.lastname}, {props.firstname}</Pane>
                   <Pane>{props.street}</Pane> <Pane>{props.city}, {props.zip} </Pane>
               </Pane>
                
            </div>
        )
        
}

export default OrderItem
