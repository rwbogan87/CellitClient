import React, { Component } from 'react';
import { Pane } from 'evergreen-ui';
import CartDisplay from './CartDisplay';

interface ICartId{

}

interface ICartItems{
    name: string;
    description: string;
    price: number;
    quantity: number;
    weight: number;
    onsale: string;
    data: any;
}

export class Cart extends React.Component <ICartId, ICartItems> {
    constructor(props: ICartItems){
        super(props);
        this.state={
            name: "",
            description: "",
            price: 0,
            quantity: 0,
            weight: 0,
            onsale: "",
            data: [],
        }
    }

    componentDidMount = () => {
        fetch(`http://localhost:8000/cartitem/1`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgyNTY5MjU3LCJleHAiOjE1ODI2NTU2NTd9.flq6vRBhl6WjZlmxISPuczTRJOgS9H_isnmGG0Y8aI0`
            })
        }).then(
            (res) => res.json()
        ).then((data) => {this.mapper(data); console.log(data); this.setState({data: data})})
    }

    mapper = (data: any) => {
        return data.map((item: any, index: number) => {
            return <CartDisplay name={item.name} description={item.description} price={item.price} quantity={item.quantity} weight={item.weight} onsale={item.onsale} key={index}/>
        })
    }

    render() {
        return (
            <Pane>
                {this.mapper(this.state.data)}
            </Pane>
        )
    }
}

export default Cart