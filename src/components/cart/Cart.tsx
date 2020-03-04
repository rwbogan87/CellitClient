import React, { Component } from 'react';
import './Cart.css';
import { Pane } from 'evergreen-ui';
import CartDisplay from './CartDisplay';
import Photo from '../../Assets/BuySometing.png';

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
    cartitemId: any;
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
            cartId: -1,
            cartitemId: 0,
        }
    }

    componentDidMount = () => {
        console.log(this.state.token);
        console.log(this.state.cartId);
        this.grabCart();
    }

    grabCart = () => {
        this.state.token === null ? this.mapper(this.state.data) :

            fetch(`http://localhost:8000/cart/`, {
                method: 'GET',
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': this.state.token
                })
        }).then(
            (res) => res.json()
        ).then((cartdata) => {console.log(cartdata); cartdata.length <= 0 ? this.mapper(this.state.data) : this.cartFetch(cartdata) ;this.setState({cartId: cartdata[0].id} )
    });
    }

    cartFetch = (cartdata: any) => {
        fetch(`http://localhost:8000/cartitem/${cartdata[0].id}`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            })
        }).then(
            (res) => res.json()
        ).then((data) => {data.sort(function(a:any, b:any){return a.id - b.id}); this.mapper(data); console.log(data); this.setState({data: data})})
    }

    mapper = (data: any) => {
        return data.length > 0 ? data.map((item: any, index: number) => {
            return <CartDisplay name={item.name} description={item.description} price={item.price} quantity={item.quantity} weight={item.weight} onsale={item.onsale} key={index} quantitymaker={this.quantitymaker} cartitemId={item.id} token={this.state.token} deleteme={this.deleteme}/>
        }) : <img src={Photo} style={{width: '100vh', height: '100vh'}}></img>
    }

    quantitymaker = (num : number, cartid: any) => {
        fetch(`http://localhost:8000/cartitem/update/${cartid}`, {
            method: 'PUT',
            body: JSON.stringify({quantity: num}),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            })
        }).then(
            (res) => res.json()
        );
        this.grabCart()
    }

    deleteme = (data: number) => {
    fetch(`http://localhost:8000/cartitem/delete/${data}`, {
            method: 'DELETE',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            })
        }).then(
            (res) => console.log(res.json())
        );
        this.grabCart()
    }

    render() {
        return (
            <Pane className="CartParent">
                <Pane className="Cart">{this.mapper(this.state.data)}</Pane>
            </Pane>
        )
    }
}

export default Cart