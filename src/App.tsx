import React from 'react';
import './App.css';
import { Pane } from 'evergreen-ui';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import { BrowserRouter as Router } from 'react-router-dom';

// let test:string = "testing";

interface IAppProps {
  //    will?: string;
}
interface IAppState {
  will: string;
  test: string;
}
class App extends React.Component<IAppProps, IAppState> {
  state = { will: 'Will!', test: 'test' };
  logit = () => {
    // this.setState(()=>{
    //   return{will: "Test2"}})
    console.log('Test');
  };

  render() {
    return (
      <>
        <Pane className='App default-styles'>
          <Router />
          <Navbar
            logit={this.logit}
            will={this.state.will}
            test={this.state.test}
          />
          <Router />
          <Footer />
        </Pane>
      </>
    );
  }
}

export default App;
