import React, { Component, SyntheticEvent } from 'react';
import './NavBar.css';
import { Pane, Button, Heading } from 'evergreen-ui';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Store from '../../components/store/Store';
import Auth from '../../components/auth/Auth';
import Cart from '../../components/cart/Cart';
import About from '../about/About';
import Admin from '../../components/admin/Admin';
import Winkel from '../../Assets/winklelogo.png'
import { stringify } from 'querystring';

interface INavbarProps {
  will: string;
  logit: (text: string) => void;
  test: string;
  // trying to send name as props and display in navbar
  setName?: (name: string) => void;
}

interface INavbarState {
  sessionToken: string;
  sessionName?: string;
  admin: any;
  user: any;
}



export class Navbar extends Component<INavbarProps, INavbarState> {
  
  state: INavbarState={
    sessionToken: "",
    sessionName: "",
    admin: localStorage.getItem('admin'),
    user: localStorage.getItem('activename')
  };

// refreshAdmin = () => this.setState(admin: !this.state.admin)

AdminButton = ()=>{
  if(this.state.admin=="true"){
  return(
    <Link className='link' to='/admin'>
                <Button>Admin</Button>
  </Link> );
  // this.forceUpdate();
}else{return null;
}
}

  setToken = (token: string) => {
    // console.log(token);
    this.setState({sessionToken: token});
  }

  setName = (name: string) => {
    this.setState({sessionName: name});
  }

  
  viewconductor = () => {
      if(this.state.sessionToken===''&&localStorage.getItem('token')===null) {
        return <Auth
        setToken={this.setToken}
        setName={this.setName}
        sessionToken={this.state.sessionToken}
        />
      } else {
        return (
          <div className="logindiv">
          <br/><br/>
          <h2>User successfully logged in.</h2>
          <h4>Click to log out</h4>
          <button onClick={() => this.logouttoggle()}>Logout</button>
          </div>
        );
      }
    }

    logouttoggle = () => {
      if(this.state.sessionToken === ''&&localStorage.getItem('token')===null) {
        return null;
      } else {
        localStorage.clear();
        
        sessionStorage.clear();
        this.setState({sessionToken: ""});
        this.forceUpdate();

      }
    }

    // in case token exists already in browser
  // componentDidMount() {
  //   if (localStorage.getItem("token")){
  //     console.log("token already exists");
  //     const newToken=localStorage.getItem("token");
  //     this.setState({sessionToken : newToken});
  //   }
  // }
  
  render() {
    return (
      <div className="default-styles">
      
        <Router>
            <Pane className="default-styles" display='flex' padding={16}  borderRadius={3}>
              <Pane flex={1} alignItems='center' display='flex'>
                <Link className='link' to='/'>
                  <div>
                    <img className="logo" src={Winkel} />
                    <h3 className="winkeltext">Winkel Online</h3>
                  </div>
                </Link>
                <h1 className="greeting">Welcome {localStorage.getItem('activename')}!</h1>
            </Pane>
            <Pane>
              {/* Below you can see the marginRight property on a Button. */}
              <Link className='link' to='/account'>
                <Button marginRight={16}>Signup/Login</Button>
              </Link>

              <Link className='link' to='/cart'>
                <Button appearance='primary'>Cart</Button>
              </Link>

              {this.AdminButton()}
              
              {/* 
              
              Test Button Below: Will delete before push
              
              */}
{/* 
                <Link className='link' to='/admin'>
                  <Button>Admin {this.props.test}</Button>
                </Link> */}



              <Link className='link' to='/about'>
                <Button onClick={this.props.logit}>
                  About {this.props.will}
                </Button>
              </Link>
            </Pane>
          </Pane>

          <div>
            <Switch>
              <Route exact path='/'>
                <Store />
              </Route>
              <Route exact path='/account'>
                {this.viewconductor()}
              </Route>
              <Route exact path='/cart'>
                <Cart token={this.setToken}/>
              </Route>
              {/* {this.state.admin!==true? null:} */}
              <Route exact path='/admin'>
                <Admin />
              </Route> 
              {/* <this.AdminButton/> */}
              <Route exact path='/about'>
                <About will={this.props.will} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Navbar;
