import React, { Component } from 'react';
import { Pane } from 'evergreen-ui';
import CartDisplay from './CartDisplay';

interface ICartProps{
    token: (token: string) => void
}


interface ICartState{
    name: string;
    description: string;
    price: number;
    quantity: number;
    weight: number;
    onsale: string;
    data: any;
    token: any;
    cartId: any;
}

export class Cart extends React.Component <ICartProps, ICartState> {
    constructor(props: any){
        super(props);
        this.state={
            name: "",
            description: "",
            price: 0,
            quantity: 0,
            weight: 0,
            onsale: "",
            data: [],
            token: localStorage.getItem('token'),
            cartId: 0,
        }
    }

    componentDidMount = () => {
        console.log(this.state.token);
        console.log(this.state.cartId);

            fetch(`http://localhost:8000/cart/`, {
                method: 'GET',
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': this.state.token
                })
        }).then(
            (res) => res.json()
        ).then((cartdata) => {console.log(cartdata[0].id); this.setState({cartId: cartdata});
            fetch(`http://localhost:8000/cartitem/${cartdata[0].id}`, {
                method: 'GET',
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': this.state.token
                })
            }).then(
                (res) => res.json()
            ).then((data) => {this.mapper(data); console.log(data); this.setState({data: data})})
    });
    }

    mapper = (data: any) => {
        return data ? data.map((item: any, index: number) => {
            return <CartDisplay name={item.name} description={item.description} price={item.price} quantity={item.quantity} weight={item.weight} onsale={item.onsale} key={index}/>
        }) : <img src='../../Assets/BuySomething.png'></img>
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