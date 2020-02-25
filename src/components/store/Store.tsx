import React, { Component } from 'react';
import { Pane, Button, Heading } from 'evergreen-ui';
import Items from './StoreItems';
import { string } from 'prop-types';
import { any } from 'glamor';

interface IStoreProps {
//   item: { id:0;
//     name: string;
//    description: string;
//    price: number;
//    quantity: number;
//    weight: number;
//    category: string;
//    onsale: string;
//    sold: number;
//    poster: number;
//  };

}

interface IStoreState {
  name: string;
  // description: string;
  // price: number;
  // quantity: number;
  // weight: number;
  // category: string;
  // onsale: string;
  // sold: number;
  // poster: number;
//    item: { id:0;
//     name: string;
//    description: string;
//    price: number;
//    quantity: number;
//    weight: number;
//    category: string;
//    onsale: string;
//    sold: number;
//    poster: number;
//  };
  // item: object;
  items:object[];
}

export class Store extends Component<IStoreProps, IStoreState> {
  constructor(props: IStoreState) {
    super(props);
    this.state = {
      name: 'Test',
      // description: 'test description',
      // price: 0,
      // quantity: 0,
      // weight: 0,
      // category: 'test',
      // onsale: 'NO!!!',
      // sold: 0,
      // poster: 0,
      items: [],
      // item: {},
      // item: { id: 0,
      //    name: '',
      //   description: '',
      //   price: 0,
      //   quantity: 0,
      //   weight: 0,
      //   category: '',
      //   onsale: '',
      //   sold: 0,
      //   poster: 0,
      // }
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
        this.mapper(json)
      });
  };

mapper = (json: any)=>{
  return this.state.items.map((item:any)=>{
return(
  <p>HI{json}</p>
    // <Items name={this.state.item.name}/>
)
  })

}


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
        
         

              <Pane>
                {this.mapper}
              </Pane>
         
        
        </Pane>
      </Pane>
    );
  }
}

export default Store;
