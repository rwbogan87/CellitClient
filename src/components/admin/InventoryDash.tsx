import React, { Component, SyntheticEvent } from 'react';
import { Pane, Button, Heading, TextInput, FormField } from 'evergreen-ui';
import './Admin.css';
import { number } from 'prop-types';

interface IProps {}

interface IState {
  id: number;
  updatedAt: any;
  createdAt: any;
  token: any;
  name: string;
  description: string;
  price: number;
  quantity: number;
  weight: number;
  catagory: string;
  onsale: string;
  sold: number;
  //url state changes
  endpoint: string;
  method: string;
  urlID: string;
}

export class InventoryDash extends Component<IProps, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {
      //url endings
      method: 'POST',
      endpoint: 'create',
      urlID: '',
      //token--
      token: localStorage.getItem('token'),
      //item --
      id: 0,
      updatedAt: '',
      createdAt: '',
      name: '',
      description: '',
      price: 0,
      quantity: 0,
      weight: 1,
      catagory: '',
      onsale: '',
      sold: 0
    };
  }

  inventoryUpdate = (e: SyntheticEvent) => {
    e.preventDefault();

    console.log('item id: ', this.state.urlID);
    console.log(this.state.urlID != '');
    console.log('method: ', this.state.method);
    console.log('endpoint: ', this.state.endpoint);

    console.log(this.state.name);
    fetch(
      `http://localhost:8000/inventoryitem/${this.state.endpoint}/${this.state.urlID}`,
      
      {
        method: `${this.state.method}`,
        body: JSON.stringify({
          name: this.state.name,
          description: this.state.description,
          price: this.state.price,
          quantity: this.state.quantity,
          weight: this.state.weight,
          catagory: this.state.catagory,
          onsale: this.state.onsale,
          sold: 0
        }),
        headers: new Headers({
          'Content-Type': 'application/json',
          authorization: this.state.token
        })
      }
    )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // console.log(data.postedinfo.id);
        this.setState({ endpoint: 'create' });
        this.setState({ method: 'POST' });
        this.setState({ urlID: '' });
      })
      .catch(err => console.log('Error: invalid item creation', err));
  };




  render() {
    return (
      <div className='dash'>
        <Pane>
          <h3>Innventory</h3>
          <div>
            <FormField className='' label='' border='2px solid white'>
              <h3>Add/Update an Item to/in the inventory</h3>
              <Pane className='input'>
                <h6 className='ml'>Item-name</h6>
                <TextInput
                  className='mr'
                  placeholder='name'
                  value={this.state.name}
                  type='string'
                  onChange={(e: any) => this.setState({ name: e.target.value })}
                />
              </Pane>
              <Pane className='input'>
                <h6 className='ml'>Descripion</h6>

                <TextInput
                  className='mr'
                  placeholder='description'
                  value={this.state.description}
                  type='string'
                  onChange={(e: any) =>
                    this.setState({ description: e.target.value })
                  }
                />
              </Pane>

              <Pane className='input'>
                <h6 className='ml'>Price</h6>

                <TextInput
                  className='mr'
                  placeholder='price'
                  value={this.state.price}
                  type='number'
                  onChange={(e: any) =>
                    this.setState({ price: e.target.value })
                  }
                />
              </Pane>
              <Pane className='input'>
                <h6 className='ml'>Quantity</h6>

                <TextInput
                  className='mr'
                  placeholder='quantitiy'
                  value={this.state.quantity}
                  type='number'
                  onChange={(e: any) =>
                    this.setState({ quantity: e.target.value })
                  }
                />
              </Pane>
              <Pane className='input'>
                <h6 className='ml'>Weight</h6>

                <TextInput
                  className='mr'
                  placeholder='weight'
                  value={this.state.weight}
                  type='number'
                  onChange={(e: any) =>
                    this.setState({ weight: e.target.value })
                  }
                />
              </Pane>
              <Pane className='input'>
                <h6 className='ml'>Category</h6>

                <TextInput
                  className='mr'
                  placeholder='catagory'
                  value={this.state.catagory}
                  type='string'
                  onChange={(e: any) =>
                    this.setState({ catagory: e.target.value })
                  }
                />
              </Pane>

              <Pane className='input'>
                <h6 className='ml'>Onsale</h6>

                <TextInput
                  // width='20em'
                  className='mr'
                  placeholder='onsale'
                  value={this.state.onsale}
                  type='string'
                  onChange={(e: any) =>
                    this.setState({ onsale: e.target.value })
                  }
                />
              </Pane>
              <Pane className='input'>
                <h6 className='ml'># Sold</h6>

                <TextInput
                  // width='20em'
                  className='mr'
                  placeholder='sold'
                  value={this.state.sold}
                  type='string'
                  onChange={(e: any) => this.setState({ sold: e.target.value })}
                />
              </Pane>

              <Pane className='input'>
                <h6 className='ml'>
                  Item ID for{' '}
                  <em>
                    <u>Update Reference only</u>
                  </em>
                </h6>

                <TextInput
                  // width='20em'
                  className='mr'
                  placeholder='id'
                  value={this.state.urlID}
                  type='string'
                  onChange={(e: any) =>{
                    this.setState({ urlID: e.target.value })
                    this.setState({method: "PUT"})
                    this.setState({endpoint: "update"})
                  }
                  }
                />
              </Pane>
              
              <Button
                onClick={(e: SyntheticEvent) => this.inventoryUpdate(e)}
                className='submitbutton'
                type='submit'
              >
                Add/Update Inventory
              </Button>
              <br />
            </FormField>

            <Pane>
            <h5>Delete an ITEM by ID#</h5>
            <FormField>
              <TextInput
               className='mr'
               placeholder='id'
               value={this.state.urlID}
               type='string'
               onChange={(e: any) =>{
                 this.setState({ urlID: e.target.value })
                 this.setState({method: "DELETE"})
                 this.setState({endpoint: "delete"})
               }
               }
              />
              <Button
                onClick={(e: SyntheticEvent) => this.inventoryUpdate(e)}
                className='submitbutton'
                type='submit'
              >
                Submit
              </Button>
            </FormField>
            <Pane>You last removed <span>order</span> number: {this.state.urlID}</Pane>
          </Pane>
          </div>
        </Pane>
      </div>
    );
  }
}

export default InventoryDash;
