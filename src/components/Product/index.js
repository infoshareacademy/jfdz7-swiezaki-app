import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <React.Fragment>
                To jest produkt o id: { this.props.match.params.id }
            </React.Fragment>
        );
    }
}

export default Product;