import React, { Component } from 'react';
import ProductItem from './ProductItem';
import PropTypes from 'prop-types';

class ProductList extends Component {
  render() {
    return this.props.products.map((product) => (
      <ProductItem key={product.id} product={product} />
    ));
  }
}

ProductList.propTypes = {
  products: PropTypes.array.isRequired
};

export default ProductList;