import React, { Component } from 'react';
import './Footer.css'
import { Button } from 'evergreen-ui';

class Footer extends Component {
  render() {
    return (
        <form method="POST" className="footerform" action="http://formspree.io/rwbogan87@gmail.com">
            <input type="email" className="email" name="email" placeholder="Your email here"></input>
            <input className="message" placeholder="Your message here" name="message"></input>
              <Button type="submit" className="footerbutton">Send</Button>
            {/* shows nothing, copies doug and will's email as well as mine */}
            <input type="hidden" name="_cc" value="williamgmckinney@gmail.com,dglsrbrown@gmail.com"></input>
          </form>
    )
  }
}

export default Footer;

/* Backup code for multer Posting, DO NOT DELETE UNTIL DEPLOYMENT*/
// import React, { Component, SyntheticEvent } from 'react';
// import { Pane, Button, Heading, TextInput, FormField } from 'evergreen-ui';
// import './Admin.css';
// import { number } from 'prop-types';
// import { fileURLToPath } from 'url';

// interface IProps { }

// interface IState {
//   id: number;
//   updatedAt: any;
//   createdAt: any;
//   token: any;
//   name: string;
//   description: string;
//   price: number;
//   quantity: number;
//   weight: number;
//   catagory: string;
//   onsale: string;
//   sold: number;
//   image: string;
// }

// export class InventoryDash extends Component<IProps, IState> {
//   constructor(props: IState) {
//     super(props);
//     this.state = {
//       token: localStorage.getItem('token'),
//       id: 0,
//       updatedAt: '',
//       createdAt: '',
//       name: '',
//       description: '',
//       price: 0,
//       quantity: 0,
//       weight: 1,
//       catagory: '',
//       onsale: '',
//       sold: 0,
//       image: ''
//     };
//   }

//   inventoryUpdate = (e: SyntheticEvent) => {

//     let upload: any = document.getElementById("upload")

//     const formData = new FormData();

//     formData.append("image", upload.files[0]);

//     let objArr: any[] = [];
//     objArr.push({
//       name: this.state.name,
//       description: this.state.description,
//       price: this.state.price,
//       quantity: this.state.quantity,
//       weight: this.state.weight,
//       catagory: this.state.catagory,
//       onsale: this.state.onsale,
//       sold: this.state.sold
//     })
//     console.log('objArr post push', objArr);
//     formData.append('objArr', JSON.stringify({objArr}));
//     console.log(objArr)
//     console.log('formData', formData)

//     e.preventDefault();
//     fetch('http://localhost:8000/inventoryitem/create', {
//       method: 'POST',
//       body: formData
//       ,
//       headers: new Headers({
//         "Authorization": this.state.token
//       })
//     })
//       .then(res => res.json())
//       .then(data => {
//         console.log(data);
//         console.log("NAME", this.state.name)
//         console.log("IMAGE", this.state.image)
//       })
//       .catch(err => console.log('Error: invalid item creation', err));
//   };

//   render() {
//     return (
//       <div className='dash'>
//         <Pane className='inventorypane'>
//           <h3>Inventory</h3>
//           <div>
//             <FormField
//               label='inventoryform'
//               encType='multipart/form-data'
//               className='inventoryform'
//               border='2px solid white'>

//               <h3>Add an Item to the inventory</h3>
//               <Pane className="input">
//                 <h6 className='ml'>Item-name</h6>
//                 <TextInput
//                   className='mr'
//                   placeholder='name'
//                   value={this.state.name}
//                   name="name"
//                   type='string'
//                   onChange={(e: any) => this.setState({ name: e.target.value })}
//                 />
//               </Pane>
//               <Pane className="input">
//                 <h6 className="ml">Descripion</h6>

//                 <TextInput
//                   className="mr"
//                   placeholder='description'
//                   value={this.state.description}
//                   type='string'
//                   onChange={(e: any) =>
//                     this.setState({ description: e.target.value })
//                   }
//                 />
//               </Pane>

//               <Pane className="input">

//                 <h6 className='ml'>Price</h6>

//                 <TextInput
//                   className='mr'
//                   placeholder='price'
//                   value={this.state.price}
//                   type='number'
//                   onChange={(e: any) => this.setState({ price: e.target.value })}
//                 />
//               </Pane>
//               <Pane className="input">

//                 <h6 className='ml'>Quantity</h6>

//                 <TextInput
//                   className='mr'
//                   placeholder='quantitiy'
//                   value={this.state.quantity}
//                   type='number'
//                   onChange={(e: any) =>
//                     this.setState({ quantity: e.target.value })
//                   }
//                 />
//               </Pane>
//               <Pane className="input">

//                 <h6 className='ml'>Weight</h6>

//                 <TextInput
//                   className='mr'
//                   placeholder='weight'
//                   value={this.state.weight}
//                   type='number'
//                   onChange={(e: any) => this.setState({ weight: e.target.value })}
//                 />
//               </Pane>
//               <Pane className="input">

//                 <h6 className='ml'>Category</h6>

//                 <TextInput
//                   className='mr'
//                   placeholder='catagory'
//                   value={this.state.catagory}
//                   type='string'
//                   onChange={(e: any) =>
//                     this.setState({ catagory: e.target.value })
//                   }
//                 />
//               </Pane>

//               <Pane className="input">
//                 <h6 className='ml'>Onsale</h6>

//                 <TextInput
//                   className='mr'
//                   placeholder='onsale'
//                   value={this.state.onsale}
//                   type='string'
//                   onChange={(e: any) => this.setState({ onsale: e.target.value })}
//                 />
//               </Pane>
//               <Pane className="input">

//                 <h6 className='ml'># Sold</h6>

//                 <TextInput
//                   className='mr'
//                   placeholder='sold'
//                   value={this.state.sold}
//                   type='number'
//                   onChange={(e: any) => this.setState({ sold: e.target.value })}
//                 />
//               </Pane>
//               <Pane className="input">

//                 <h6 className='ml'>Image</h6>

//                 <input
//                   className='mr'
//                   placeholder='image'
//                   type='file'
//                   id='upload'
//                 />
//               </Pane>

//               <Button
//                 onClick={(e: SyntheticEvent) => this.inventoryUpdate(e)}
//                 className='submitbutton'
//                 type='submit'
//               >
//                 Submit
//               </Button>
//               <br />
//             </FormField>
//           </div>
//         </Pane>
//       </div>
//     );
//   }
// }

// export default InventoryDash;
