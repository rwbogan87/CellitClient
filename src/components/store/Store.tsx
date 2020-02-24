import React, { Component } from 'react';
import { Pane, Button, Heading } from 'evergreen-ui';
import Items from "./StoreItems";
import { string } from 'prop-types';

interface IStoreProps{

}

interface IStoreState{
  name: string;
  description: string;
  price: number;
  quantity: number;
  weight: number;
  catagory: string;
  onsale: string;
  sold: number;
  poster: number;
}


export class Store extends Component<IStoreProps, IStoreState> {

  state = {
    name: 'Test',
    description: 'test description',
    price: 0,
    quantity: 0,
    weight: 0,
    catagory: 'test',
    onsale: 'NO!!!',
    sold: 0,
    poster: 0,
  }


mapItems=()=>{

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
            {/* Below you can see the marginRight property on a Button. */}
            {/* <Button marginRight={16}>Button</Button> */}
            <Button >Search</Button>
          </Pane>
        </Pane>
        <Pane>
          {/* <Pane background='tint1' padding={24} marginBottom={16}>
            <Text>tint1</Text>
          </Pane>
          <Pane background='tint2' padding={24}>
            <Text>tint2</Text>
          </Pane> */}
          <Items/>
        </Pane>
      </Pane>
    );
  }
}

export default Store;
