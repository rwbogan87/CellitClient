import React from 'react';
import './StoreItems.css'
import { Pane, Button, Icon } from 'evergreen-ui';
import Popup from "reactjs-popup";

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
  image: string;
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
                      category: props.category,
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
                      category: props.category,
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
      <Pane key={props.id} className='fullitemparent'>
        {/* <Pane className="default-styles" padding={24} marginBottom={16}><Text color="#eeeeee">{props.name}</Text></Pane> */}
            <Pane fontSize='16px' className='fullitem'>
              <img src={(`http://localhost:8000/${props.image}`)}
              className="image" alt='image' />
              <h1>{props.name}</h1>
              <h3 color='#eeeeee'>
                ${props.price}
              </h3>
              <Popup trigger={<button className="itemdetails"><b> -Details- </b></button>} position="top center">
                <div>
                <h4><u>Product information</u></h4>
                <Pane>Id: {props.id}</Pane>
                <Pane>Category: {props.category}</Pane>
                <Pane>Description:</Pane>
                <Pane><b>{props.description}</b></Pane>
                <Pane>Weight: {props.weight} lb(s).</Pane>
                <Pane>Quantity Available: {props.quantity}</Pane>
                <Pane>Number Sold: {props.sold}</Pane>
                <Pane>On Sale: {props.onsale}</Pane>
                </div>
              </Popup>
              <Button className="itembutton" marginLeft={24} onClick={() => {addToCart(props)}}>
                <Icon icon='shopping-cart'></Icon>
              </Button>
            </Pane>
          </Pane>
    </div>
  );
};
export default StoreItems;
