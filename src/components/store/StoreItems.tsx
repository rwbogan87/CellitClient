import React, { Component } from 'react'
import { Pane, Button, Text,Icon } from 'evergreen-ui';
import StockImage from '../../Assets/cell-it1.jpg'


interface IStoreItemProps{
    // items:object[];
    // name: string;
    // description: string;
    // price: number;
    // quantity: number;
    // weight: number;
    // category: string;
    // onsale: string;
    // sold: number;
    // poster: number;
    item: {  name: string;
        description: string;
        price: number;
        quantity: number;
        weight: number;
        category: string;
        onsale: string;
        sold: number;
        poster: number;
      }
}


const StoreItems = (props:IStoreItemProps)=>{


    const mapItems=(arr:any)=>{
        arr.map(()=>{});
      
      }

    
        return (
            <div>
                <Pane className= 'item'>
                    {/* <Pane className="default-styles" padding={24} marginBottom={16}><Text color="#eeeeee">{props.name}</Text></Pane> */}
                    <Pane >
                        <Pane justifyContent="space-between" display='flex' padding={24} >
                            <Pane fontSize="16px">
                                <h2>{props.item.name}</h2>
                                {/* <h3 color="#eeeeee">{props.description} ${props.price}</h3> 
                                <h4>Product information</h4>
                        
                                <Pane> Categorty: {props.category}</Pane>
                                <Pane> Item Weight: {props.weight}</Pane>
                                <Pane>Quantity Available: {props.quantity}</Pane>
                                <Pane>Number Sold: {props.sold}</Pane>
                                <Pane>On Sale: {props.onsale}</Pane> */}
                                </Pane>
                                <Pane>
                                <img src={StockImage} alt="image"/>
                                {/* <Pane textAlign="center">$ {props.price}</Pane> */}
                                <Button marginLeft = {24}><Icon icon="shopping-cart"></Icon></Button></Pane>
                                </Pane>
                    </Pane>
               
               </Pane>
            </div>
        )
    
}

export default StoreItems
