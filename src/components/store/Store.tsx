import React, { Component } from 'react';
import './Store.css';
import { Pane, Button, Heading } from 'evergreen-ui';
// import Video from "./winkelvideo.mp4";
import Items from './StoreItems';
import { string } from 'prop-types';
import { any } from 'glamor';
import { isTSEnumMember, isTemplateElement } from '@babel/types';
import { Redirect } from 'react-router-dom';

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
    catagory: string;
    onsale: string;
    sold: number;
    image: string;
  };
  items: object[];
  checker: boolean;
  searchTerm: any;
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
        catagory: '',
        onsale: '',
        sold: 0,
        image: ''
      },
      checker: true,
      searchTerm: ''
    };
  }

  changeValue = () => {
    this.setState({checker: false})
  }

  componentDidMount = () => {
    this.getAllItems();
    // console.log(this.state.item.image)
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
        console.log(json);
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
              catagory={item.catagory}
              onsale={item.onsale}
              sold={item.sold}
              image={item.image}
              token={this.state.token}
              checker={this.state.checker}
              changeValue={this.changeValue}
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
            catagory={this.state.item.catagory}
            onsale={this.state.item.onsale}
            sold={this.state.item.sold}
            image={this.state.item.image} 
            token={this.state.token}
            checker={this.state.checker}
            changeValue={this.changeValue}
          />
        </Pane>
      );
    }
  };

  searcher = (searchTerm: any) => {
    fetch(`http://localhost:8000/inventoryitem/allitems/${searchTerm}`, {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'application/json',
        authorization: this.state.token
      })
    }).then(
      res => res.json
    ).then(
      data => console.log(data)
    )
  }

  render() {
    if (this.state.checker === false) {
      return <Redirect to='/account' />
    }
    return (
      <Pane className="main">
        <Pane className='App-header'>
          {/* attempt to get video wallpaper */}
          {/* <video loop autoPlay>
            <source src='/cellit-client/public/videos/winkelvideo.mp4' type="video/mp4"/>
          </video> */}
        </Pane>
            <Heading size={600}>Our Items For Sale</Heading>
        <Pane display='flex' padding={16} background='tint2' borderRadius={3}>
          <Pane flex={1} alignItems='center' display='flex'>
          </Pane>
          <Pane>
            <form onSubmit={this.searcher}>
            <input onChange={(e: any) => this.setState({searchTerm: e.target.value}) } />
            <Button style={{margin: '1em'}} type='submit'>Search</Button>
            </form>
          </Pane>
        </Pane>
        <Pane className='itempane'>{this.mapper(this.state.items)}</Pane>
      </Pane>
    );
  }
}

export default Store;
