import React, { Component } from 'react';
import { Pane, Button, Heading } from 'evergreen-ui';
import Items from './StoreItems';
import { string } from 'prop-types';

interface IStoreProps {}

interface IStoreState {
  name: string;
  description: string;
  price: number;
  quantity: number;
  weight: number;
  category: string;
  onsale: string;
  sold: number;
  poster: number;
  items: object;
}

export class Store extends Component<IStoreProps, IStoreState> {
  constructor(props: IStoreState) {
    super(props);
    this.state = {
      name: 'Test',
      description: 'test description',
      price: 0,
      quantity: 0,
      weight: 0,
      category: 'test',
      onsale: 'NO!!!',
      sold: 0,
      poster: 0,
      items: []
    };
  }

  componentDidMount = () => {
    this.getAllItems();
  };

  getAllItems = () => {
    fetch(`http://localhost:8000/inventoryitem/inventory`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        authorization:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTgyNTc2NTU5LCJleHAiOjE1ODI2NjI5NTl9.XuCYTDafGUKt5mF7aMHdiKC7WVzaxLdsT5x0QA0mVvk'
      })
    })
      .then(function(result) {
        return result.json();
      })
      .then(json => {
        // console.log(json);
        this.setState({ items: json });
        console.log(this.state.items);
      });
  };

  render() {
    return (
      <Pane>
        <Pane className='App-header'>
          <h1>Cell/it!</h1>
          <p>*Anatomically Needed*</p>
        </Pane>
        <Pane display='flex' padding={16} background='tint2' borderRadius={3}>
          <Pane flex={1} alignItems='center' display='flex'>
            <Heading size={600}>Our Items For Sale</Heading>
          </Pane>
          <Pane>
            <Button>Search</Button>
          </Pane>
        </Pane>
        <Pane>
          <Items
            name={this.state.name}
            description={this.state.description}
            price={this.state.price}
            quantity={this.state.quantity}
            weight={this.state.weight}
            category={this.state.category}
            onsale={this.state.onsale}
            sold={this.state.sold}
            poster={this.state.poster}
          />
          {/* 
          
          {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
          
          */}
        </Pane>
      </Pane>
    );
  }
}

export default Store;
