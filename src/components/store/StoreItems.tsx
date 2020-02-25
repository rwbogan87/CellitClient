import React, { Component } from 'react';
import { Pane, Button, Text, Icon } from 'evergreen-ui';
import StockImage from '../../Assets/cell-it1.jpg';

interface IStoreItemProps {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number;
  weight: number;
  category: string;
  onsale: string;
  sold: number;
}

const StoreItems = (props: IStoreItemProps) => {
  const mapItems = (arr: any) => {
    arr.map(() => {});
  };
  return (
    <div>
      <Pane key={props.id} className='item'>
        {/* <Pane className="default-styles" padding={24} marginBottom={16}><Text color="#eeeeee">{props.name}</Text></Pane> */}
        <Pane>
          <Pane justifyContent='space-between' display='flex' padding={24}>
            <Pane fontSize='16px'>
              <h2>{props.name}</h2>
              <h3 color='#eeeeee'>
                {props.description} ${props.price}
              </h3>
              <h4>Product information</h4>

              <Pane> Categorty: {props.category}</Pane>
              <Pane> Item Weight: {props.weight}</Pane>
              <Pane>Quantity Available: {props.quantity}</Pane>
              <Pane>Number Sold: {props.sold}</Pane>
              <Pane>On Sale: {props.onsale}</Pane>
            </Pane>
            <Pane>
              <img src={StockImage} alt='image' />
              {/* <Pane textAlign="center">$ {props.price}</Pane> */}
              <Button marginLeft={24}>
                <Icon icon='shopping-cart'></Icon>
              </Button>
            </Pane>
          </Pane>
        </Pane>
      </Pane>
    </div>
  );
};
export default StoreItems;
