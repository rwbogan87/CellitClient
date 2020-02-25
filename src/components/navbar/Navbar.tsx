import React, { Component, SyntheticEvent } from 'react';
import { Pane, Button, Heading } from 'evergreen-ui';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Store from '../../components/store/Store';
import Auth from '../../components/auth/Auth';
import Cart from '../../components/cart/Cart';
import About from '../about/About';
import Admin from '../../components/admin/Admin';
import { stringify } from 'querystring';

interface INavbarProps {
  will: string;
  logit: (text: string) => void;
  test: string;
}

interface INavbarState {
  sessionToken: string;
}

export class Navbar extends Component<INavbarProps, INavbarState> {
  
  state: INavbarState={
    sessionToken: ""
  };

  setToken = (token: string) => {
    console.log(token);
    this.setState({sessionToken: token})
    ;
  }

  viewconductor = () => {
      if(this.state.sessionToken === '') {
        return <Auth setToken={this.setToken}/>;
      } else {
        return (
          <div>
          <h1>User successfully logged in.</h1>
          <h3>Click to log out</h3>
          <button onClick={() => this.logouttoggle()}>Logout</button>
          </div>
        );
      }
    }

    logouttoggle = () => {
      if(this.state.sessionToken === '') {
        return null;
      } else {
        localStorage.clear();
        sessionStorage.clear();
        this.setState({sessionToken: ""})
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
      <div className="default-styles
      ">
        <Router>
          <Pane className="default-styles" display='flex' padding={16}  borderRadius={3}>
            <Pane flex={1} alignItems='center' display='flex'>
              <Link className='link' to='/'>
                <Heading size={600}color="#eeeeee">Cell/it!</Heading>
              </Link>
            </Pane>
            <Pane>
              {/* Below you can see the marginRight property on a Button. */}
              <Link className='link' to='/account'>
                <Button marginRight={16}>Signup/Login</Button>
              </Link>

              <Link className='link' to='/cart'>
                <Button appearance='primary'>Cart</Button>
              </Link>

              <Link className='link' to='/admin'>
                <Button>Admin {this.props.test}</Button>
              </Link>

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
              <Route exact path='/admin'>
                <Admin />
              </Route>
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
