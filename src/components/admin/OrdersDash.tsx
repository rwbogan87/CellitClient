import React, { Component, SyntheticEvent } from 'react';
import { Pane, Button, Heading, TextInput, FormField } from 'evergreen-ui';
import './Admin.css';
// import Order from './OrderItem'
import OrderItem from './OrderItem';
import { returnStatement, directive } from '@babel/types';

interface IProps {}

interface IState {
  delete: number;
  orders: object[];
  token: any;
  id: number;
  street: string;
  city: string;
  zip: number;
  phone: string;
  firstname: string;
  lastname: string;
  userId: number;
  removed: string;
  show: boolean;
  
}

export class OrdersDash extends Component<IProps, IState> {
  constructor(props: IState) {
    super(props);

    this.state = {
    
      delete: 0,
      orders: [],
      token: localStorage.getItem('token'),
      id: 0,
      street: 'PSC 469 Box 3.14159',
      city: 'APO',
      zip: 96599,
      phone: '',
      firstname: 'Station',
      lastname: 'McMurdo',
      userId: 0,
      removed: '',
      show: false,
    };
  }

  componentDidMount = () => {
    this.getAllOrders();
  };

  getAllOrders = () => {
    fetch(`http://localhost:8000/order/orders`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        authorization: this.state.token
        // 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgyNTc2NTU5LCJleHAiOjE1ODI2NjI5NTl9.XuCYTDafGUKt5mF7aMHdiKC7WVzaxLdsT5x0QA0mVvk'
      })
    })
      .then(function(result) {
        return result.json();
      })
      .then(json => {
        // console.log(json);
        this.setState({ orders: json });
        console.log(this.state.orders);
      });
  };

  mapper = (json: any) => {
    console.log(json);
    if (json.length > 0) {
      return json.map((order: any) => {
        console.log(order);
        return (
          <Pane key={order.id}>
            <OrderItem
            // update={this.orderUpdate}
              id={order.id}
              street={order.street}
              city={order.city}
              zip={order.zip}
              phone={order.phone}
              firstname={order.firstname}
              lastname={order.lastname}
              userId={order.userId}
            />
          </Pane>
        );
      });
    } else {
      return (
        <Pane key={this.state.id}>
          <OrderItem
        //   update={this.orderUpdate}
            id={this.state.id}
            street={this.state.street}
            city={this.state.city}
            zip={this.state.zip}
            phone={this.state.phone}
            firstname={this.state.firstname}
            lastname={this.state.lastname}
            userId={this.state.userId}
          />
        </Pane>
      );
    }
  };

  orderDelete = (e: SyntheticEvent) => {
    e.preventDefault();
    console.log(this.state.delete);
    fetch(`http://localhost:8000/order/delete/${this.state.delete}`, {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'application/json',
        authorization: this.state.token
      })
    })
     
      .then(data => {
        console.log("response status: ", data.status);
        this.setState({ removed: this.state.delete.toString() });
        this.setState({ delete: 0 });
        this.getAllOrders();
      })
      .catch(err => console.log('Error: invalid item creation', err));
  };

  ShowUpdate = ()=>{
      if (this.state.show){
          return <div>Good try!!</div>
      }else{
          return null;
      }
  }

  updateOrder=()=>{
      console.log("You updated your an order!")
  }


  render() {
    return (
      <div className='dash'>
        <Pane>
          <h3>Orders</h3>
          <Pane>
            <Pane>{this.mapper(this.state.orders)}</Pane>
          </Pane>
          <Pane>
            <h5>Delete an Order by Order#</h5>
            <FormField>
              <TextInput
                className=''
                placeholder='0'
                value={this.state.delete}
                type='number'
                onChange={(e: any) => this.setState({ delete: e.target.value })}
              />
              <Button
                onClick={(e: SyntheticEvent) => this.orderDelete(e)}
                className='submitbutton'
                type='submit'
              >
                Submit
              </Button>
            </FormField>
            <Pane>You last removed <span>order</span> number: {this.state.removed}</Pane>
          </Pane>

            <Pane>
                <Button onClick={() => this.setState({show: true})}>Order Update</Button>
                <this.ShowUpdate/>
            </Pane>


        </Pane>
      </div>
    );
  }
}

export default OrdersDash;
