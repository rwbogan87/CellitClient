import React, { Component, SyntheticEvent } from 'react';
import { Pane, Button, Heading, TextInput, FormField } from 'evergreen-ui';
import './Admin.css';
import User from './User';

interface IProps {}

interface UserState {
    userData: any
}

interface UserProps {

}

export class UsersDash extends Component <UserProps, UserState> {
    constructor(props: UserProps) {
        super(props);
        this.state={
            userData: []
        };
    }

    componentDidMount(){

        fetch(`http://localhost:8000/user/allusers`, {
            method: 'GET',
            headers: new Headers ({
                'Content-Type': 'application/json',
            })
        }).then(
            (res) => res.json()
        ).then(
            (userData) => {this.userMapper(userData); this.setState({userData: userData})}
        )
        }
    
    userMapper = (userData: any) => {
        return userData.map((userData: any) =>
        {console.log(userData)
        return (<Pane>
            <p>{userData.firstname} {userData.lastname}</p>
            <p>{userData.email}</p>
            <p>{userData.street}, {userData.city} {userData.zip}</p>
            <p>{userData.phone}</p>
                </Pane>)}
        )}
    
    render() {
        return (
            <div  className="dash">
                <Pane>
                    <h1>User Dashboard</h1>
                    {this.userMapper(this.state.userData)}
                </Pane>
                
            </div>
        )
    }
interface IState {
  token: any;
  userID: any;
  user: object[];
}

export class UsersDash extends Component<IProps, IState> {
  constructor(props: IState) {
    super(props);
    this.state = {
      token: localStorage.getItem('token'),
      userID: '',
      user: [],

    };
  }

  // componentDidMount = ()=>{
  //     this.getAllUsers();
  // }
  getUser = (e: SyntheticEvent) => {
    fetch(`http://localhost:8000/user/${this.state.userID}`, {
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
        this.setState({ user: json[0] });
        console.log(this.state.user);
        // console.log(this.state.user[0])
      });
  };

  render() {
    return (
      <div className='dash'>
        <Pane>
          <h3>Find a Specific User</h3>
          <FormField label=''>
            <TextInput
              className=''
              placeholder='0'
              value={this.state.userID}
              type='number'
              onChange={(e: any) => this.setState({ userID: e.target.value })}
            />
            <Button
              onClick={(e: SyntheticEvent) =>{
                 this.getUser(e)
              }
                }
              className='submitbutton'
              type='submit'
            >
              Submit
            </Button>
          </FormField>
          <Pane>
              <User
                user = {this.state.user}
              />
            {/* <User user={this.state.user} }/> */}
            {/* {this.state.user} */}
          </Pane>
        </Pane>
      </div>
    );
  }
}

export default UsersDash;
