import React from 'react';
import './App.css';
import { Pane } from 'evergreen-ui';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import {
  BrowserRouter as Router,
} from 'react-router-dom';

function App() {
  console.log('hi');
  return (
    <>
    <Pane className='App'>
      <Router/>
        <Navbar />
      <Router/>
        <Footer/>
    </Pane>
    </>
  );
}

export default App;
