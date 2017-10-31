import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import * as Cart from './configuration/cart'

// Cart.add('cart', { name: 'Tyler'})

class App extends Component {
  render() {

    const cart = Cart.get('cart')

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Hello, {cart.name}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
