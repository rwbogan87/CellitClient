import React from 'react';
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
  token: any;
  checker: boolean;
  changeValue: () => void;
}

const StoreItems = (props: IStoreItemProps) => {
  
  const mapItems = (arr: any) => {
    arr.map(() => {});
  };

  const addToCart = (props: any) => {
    
    fetch(`http://localhost:8000/cart/`, {
                method: 'GET',
                headers: new Headers ({
                    'Content-Type': 'application/json',
                    'Authorization': props.token
                })
            }).then(
                (res) => res.json()
            ).then((data: any) => { console.log(data)
            
            data.error === "Not authorized" ? 
            
            props.changeValue()
            
            : data.length <= 0 ?

                fetch(`http://localhost:8000/cart/create`, {
                    method: 'POST',
                    headers: new Headers ({
                          'Content-Type': 'application/json',
                          'Authorization': props.token
                  })
                }).then(
                  res => res.json()
                  ).then((data2: any)  =>
                  fetch(`http://localhost:8000/cartitem/create`, {
                    method: 'POST',
                    body: JSON.stringify({
                      name: props.name,
                      description: props.description,
                      price: props.price,
                      quantity: 1,
                      weight: props.weight,
                      onsale: props.onsale
                    }),
                    headers: new Headers ({
                          'Content-Type': 'application/json',
                          'Authorization': props.token
                    })
                  }). then(
                    res => res.json()
                  )
                ) 
          
          :

                fetch(`http://localhost:8000/cartitem/create`, {
                    method: 'POST',
                    body: JSON.stringify({
                      name: props.name,
                      description: props.description,
                      price: props.price,
                      quantity: 1,
                      weight: props.weight,
                      onsale: props.onsale
                    }),
                    headers: new Headers ({
                          'Content-Type': 'application/json',
                          'Authorization': props.token
                    })
                  }).then(res => res.json())
          }
    )}

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
              <Button marginLeft={24} onClick={() => {addToCart(props)}}>
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
