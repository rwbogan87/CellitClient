import React, { Component } from 'react';
import { Pane, Button, Heading } from 'evergreen-ui';
import Items from './StoreItems';
import { string } from 'prop-types';
import { any } from 'glamor';
import { isTSEnumMember, isTemplateElement } from '@babel/types';

interface IStoreProps {}

interface IStoreState {
  token: any;
  item: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    weight: number;
    category: string;
    onsale: string;
    sold: number;
  };
  items: object[];
}

export class Store extends Component<IStoreProps, IStoreState> {
  constructor(props: IStoreState) {
    super(props);
    this.state = {
      token: localStorage.getItem('token'),
      items: [],
      item: {
        id: 0,
        name: '',
        description: '',
        price: 0,
        quantity: 0,
        weight: 1,
        category: '',
        onsale: '',
        sold: 0
      }
    };
  }

  componentDidMount = () => {
    this.getAllItems();
  };
  componentWillMount = () => {};
  // tokenMaster =() => {
  //   if (localStorage.getItem('token')) {
  //     this.setState({token: localStorage.getItem('token')});
  //   }
  // };
  getAllItems = () => {
    fetch(`http://localhost:8000/inventoryitem/inventory`, {
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
        this.setState({ items: json });
        console.log(this.state.items);
      });
  };

  mapper = (json: any) => {


    console.log(json)
    if (json.length>0) {
      return json.map((item: any) => {
        console.log(item);
        return (
          <Pane key={item.id}>
            <Items
              id={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              quantity={item.quantity}
              weight={item.weight}
              category={item.category}
              onsale={item.onsale}
              sold={item.sold}
            /> 
          </Pane>
        );
      });
    } else {
      return (
        <Pane key={this.state.item.id}>
          <Items
            id={this.state.item.id}
            name={this.state.item.name}
            description={this.state.item.description}
            price={this.state.item.price}
            quantity={this.state.item.quantity}
            weight={this.state.item.weight}
            category={this.state.item.category}
            onsale={this.state.item.onsale}
            sold={this.state.item.sold}
          />
        </Pane>
      );
    }
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
          <Pane>{this.mapper(this.state.items)}</Pane>
        </Pane>
      </Pane>
    );
  }
}

export default Store;
