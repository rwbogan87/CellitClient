import React, { Component } from 'react';
import { Pane, Button } from 'evergreen-ui';
import './Cart.css';
import CartDisplay from './CartDisplay';
import Photo from '../../Assets/BuySometing.png';
import User from '../admin/User';
import { Redirect } from 'react-router-dom';

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
    checkout: boolean;
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
            checkout: false,
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
        ).then((cartdata) => {console.log(cartdata); cartdata.length <= 0 ? this.mapper(this.state.data) : this.cartFetch(cartdata)
    });
    }

    cartFetch = (cartdata: any) => {
    this.setState({cartId: cartdata[0].id});
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
        }) : <img src={Photo} className="cartphoto" style={{width: '90vw', height: '100vh'}}></img>
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

    checkoutPartOne = () => {
        fetch(`http://localhost:8000/cartitem/${this.state.cartId}`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            })
        }).then(
            (res) => res.json()
        ).then(
            cartData => this.checkoutPartTwo(cartData)
        )
    }

    checkoutPartTwo = (cartData: any) => {
        fetch(`http://localhost:8000/user/`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            })
        }).then(
            (res) => res.json()
        ).then(
            userData => this.checkoutPartThree(userData, cartData)
        )
    }

    checkoutPartThree = (userData:any, cartData:any) => {
        console.log(userData);
        fetch(`http://localhost:8000/order/create`, {
            method: 'POST',
            body: JSON.stringify({
                street: userData.street,
                city: userData.city,
                zip: userData.zip,
                phone: userData.phone,
                firstname: userData.firstname,
                lastname: userData.lastname
            }),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            })
        }).then(
            (res) => res.json()
        ).then(
            orderData => this.checkoutPartFour(orderData, userData, cartData)
        )
    }

    checkoutPartFour = (orderData: any, userData: any, cartData: any) => {
        cartData.map((cartItem: any) =>
        fetch(`http://localhost:8000/orderitem/create`, {
            method: 'POST',
            body: JSON.stringify({
                name: cartItem.name,
                description: cartItem.description,
                price: cartItem.price,
                quantity: cartItem.quantity,
                weight: cartItem.weight,
                onsale: cartItem.onsale,
                orderId: orderData.id
            }),
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            })
        }).then(
            (res) => res.json()
        ).then(
            orderItemData => this.checkoutPartFinal(orderItemData, orderData, userData, cartData)
        )
        )
    }

    checkoutPartFinal = (orderItemData: any, orderData: any, userData: any, cartData: any) => {
        cartData.map((cartItem: any) =>
        fetch(`http://localhost:8000/cartitem/delete/${cartItem.id}`, {
            method: 'delete',
            headers: new Headers ({
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            })
        }).then(
            (res) => res.json()
        ));
        fetch(`http://localhost:8000/cart/delete`, {
                method: 'DELETE',
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': this.state.token
                })
        }).then(
            (res) => res.json()
        );
        this.setState({checkout: true});
    }



    render() {
        if (this.state.checkout === true) {
            return <Redirect to='/' />
          }
        return (
            <div>
            <Pane className="CartParent">
                <Pane className="Cart">{this.mapper(this.state.data)}</Pane>
            </Pane>
            <Pane>
                <Button onClick={this.checkoutPartOne}>CHECKOUT</Button>
            </Pane>
            </div>
        )
    }
}

export default Cart