import React, { Component, SyntheticEvent } from 'react';
import { Pane, Button, Heading, TextInput, FormField } from 'evergreen-ui';
import './Admin.css';
import { number } from 'prop-types';
import { fileURLToPath } from 'url';

interface IProps { }

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
  image: string;
}

export class InventoryDash extends Component<IProps, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {
      token: localStorage.getItem('token'),
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
      sold: 0,
      image: ''
    };
  }

  inventoryUpdate = (e: SyntheticEvent) => {

    const formData = new FormData();
    formData.append("image", this.state.image);

    let objArr: any[] = [];
    objArr.push({
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      quantity: this.state.quantity,
      weight: this.state.weight,
      catagory: this.state.catagory,
      onsale: this.state.onsale,
      sold: this.state.sold
    })
    console.log('objArr post push', objArr);
    formData.append('objArr', JSON.stringify(objArr));
    console.log('formData', formData)

    e.preventDefault();
    fetch('http://localhost:8000/inventoryitem/create', {
      method: 'POST',
      body: formData
      // body: 
      //     JSON.stringify({
      //     name: this.state.name,
      //     description: this.state.description,
      //     price: this.state.price,
      //     quantity: this.state.quantity,
      //     weight: this.state.weight,
      //     catagory: this.state.catagory,
      //     onsale: this.state.onsale,
      //     sold: this.state.sold,
      //     image: this.state.image
      //   })

      ,
      headers: new Headers({
        // "Content-Type": 'form-data',
        "Authorization": this.state.token
      })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        console.log("NAME", this.state.name)
        console.log("IMAGE", this.state.image)
      })
      .catch(err => console.log('Error: invalid item creation', err));
  };

  extractFilename = (path: any): any => {
    if (path.substr(0, 12) == "C:\\fakepath\\")
      return path.substr(12); // modern browser
    var x;
    x = path.lastIndexOf('/');
    if (x >= 0) // Unix-based path
      return path.substr(x + 1);
    x = path.lastIndexOf('\\');
    if (x >= 0) // Windows-based path
      return path.substr(x + 1);
    return path; // just the file name
  }

  updateFilename = (path: any): any => {
    let name = this.extractFilename(path);
    console.log(typeof name)
    this.setState({ image: name })
    // document.getElementById('filename').textContent = name;
  }


  render() {
    return (
      <div className='dash'>
        <Pane className='inventorypane'>
          <h3>Inventory</h3>
          <div>
            <FormField
              label='inventoryform'
              encType='multipart/form-data'
              className='inventoryform'
              border='2px solid white'>

              <h3>Add an Item to the inventory</h3>
              <Pane className="input">
                <h6 className='ml'>Item-name</h6>
                <TextInput
                  className='mr'
                  // encType='multipart/form-data'
                  placeholder='name'
                  value={this.state.name}
                  name="name"
                  type='string'
                  onChange={(e: any) => this.setState({ name: e.target.value })}
                />
              </Pane>
              <Pane className="input">
                <h6 className="ml">Descripion</h6>

                <TextInput
                  className="mr"
                  placeholder='description'
                  // encType='multipart/form-data'
                  value={this.state.description}
                  type='string'
                  onChange={(e: any) =>
                    this.setState({ description: e.target.value })
                  }
                />
              </Pane>

              <Pane className="input">

                <h6 className='ml'>Price</h6>

                <TextInput
                  className='mr'
                  // encType='multipart/form-data'
                  placeholder='price'
                  value={this.state.price}
                  type='number'
                  onChange={(e: any) => this.setState({ price: e.target.value })}
                />
              </Pane>
              <Pane className="input">

                <h6 className='ml'>Quantity</h6>

                <TextInput
                  className='mr'
                  // encType='multipart/form-data'
                  placeholder='quantitiy'
                  value={this.state.quantity}
                  type='number'
                  onChange={(e: any) =>
                    this.setState({ quantity: e.target.value })
                  }
                />
              </Pane>
              <Pane className="input">

                <h6 className='ml'>Weight</h6>

                <TextInput
                  className='mr'
                  // encType='multipart/form-data'
                  placeholder='weight'
                  value={this.state.weight}
                  type='number'
                  onChange={(e: any) => this.setState({ weight: e.target.value })}
                />
              </Pane>
              <Pane className="input">

                <h6 className='ml'>Category</h6>

                <TextInput
                  className='mr'
                  // encType='multipart/form-data'
                  placeholder='catagory'
                  value={this.state.catagory}
                  type='string'
                  onChange={(e: any) =>
                    this.setState({ catagory: e.target.value })
                  }
                />
              </Pane>

              <Pane className="input">
                <h6 className='ml'>Onsale</h6>

                <TextInput
                  // width='20em'
                  className='mr'
                  // encType='multipart/form-data'
                  placeholder='onsale'
                  value={this.state.onsale}
                  type='string'
                  onChange={(e: any) => this.setState({ onsale: e.target.value })}
                />
              </Pane>
              <Pane className="input">

                <h6 className='ml'># Sold</h6>

                <TextInput
                  // width='20em'
                  className='mr'
                  // encType='multipart/form-data'
                  placeholder='sold'
                  value={this.state.sold}
                  type='number'
                  onChange={(e: any) => this.setState({ sold: e.target.value })}
                />
              </Pane>
              <Pane className="input">

                <h6 className='ml'>Image</h6>

                <TextInput
                  // width='20em'
                  className='mr'
                  placeholder='image'
                  // encType='multipart/form-data'
                  type='file'
                  onChange={
                    (e: any) => { this.updateFilename(e.target.value) }
                    // console.log(e.target.value)
                    //  (e: any) => this.setState({ image: e.target.file })
                  }
                />
              </Pane>

              <Button
                onClick={(e: SyntheticEvent) => this.inventoryUpdate(e)}
                className='submitbutton'
                type='submit'
              >
                Submit
              </Button>
              <br />
            </FormField>
          </div>
        </Pane>
      </div>
    );
  }
}

export default InventoryDash;
