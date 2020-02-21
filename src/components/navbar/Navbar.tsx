import React, { Component } from 'react';
import { Pane, Button, Heading} from  'evergreen-ui';
import { BrowserRouter as Router,Route, Link, Switch } from 'react-router-dom';
import Store from '../../components/store/Store';
import Auth from'../../components/auth/Auth';
import Cart from '../../components/cart/Cart';
import About from '../about/About';
import Admin from '../../components/admin/Admin'



export class Navbar extends Component {
    render() {
        return (
          <div>
            <Router>
            <Pane display="flex" padding={16} background="tint2" borderRadius={3}>
            <Pane flex={1} alignItems="center" display="flex">
              <Link className = 'link' to='/'>
              <Heading size={600}>Cell/it!</Heading>
              </Link>
            </Pane>
            <Pane>
              {/* Below you can see the marginRight property on a Button. */}
              <Link className='link' to ='/account'>
              <Button marginRight={16}>Signup/Login</Button>
              </Link>

              <Link className='link' to ='/cart'>  
              <Button appearance="primary">Cart</Button>
              </Link>

              <Link className='link' to= '/admin'>
              <Button>Admin</Button>
              </Link>

              <Link className='link' to= '/about'>
              <Button>About</Button>
              </Link>
            </Pane>
          </Pane>
          
          <div>
            <Switch>
              <Route exact path='/'>
                  <Store/>
              </Route>
              <Route exact path='/account'>
                  <Auth/>
              </Route>
              <Route exact path='/cart'>
                  <Cart/>
              </Route>
              <Route exact path='/admin'>
                  <Admin/>
              </Route>
              <Route exact path='/about'>
                  <About/>
              </Route>
            </Switch>
          </div>
          </Router>
          </div>
        )
    }
}

export default Navbar
