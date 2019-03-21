import React, { Component } from 'react';
import ProductList from './components/product/ProductList';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    axios.get('https://localhost:3000/')
      .then(res => this.setState({ products: res.data }))
  }

  render() {
    return (
      <div className="container">
        <ProductList products={this.state.products} />
      </div>
    );
  }
}

export default App;