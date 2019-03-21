import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class ProductItem extends Component {
  getStyle = () => {
    return {
      background: '#f4f4f4',
      padding: '10px',
      borderBottom: '1px #ccc dotted'
    };
  }

  render() {
    const { name, description } = this.props.product;
    return (
      <div style={this.getStyle()}>
        <p>{ name } - { description }</p>
      </div>
    );
  }
}

ProductItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductItem;
