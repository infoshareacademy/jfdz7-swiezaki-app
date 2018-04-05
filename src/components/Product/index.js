import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProductView from './ProductView'

class Product extends Component {

    render() {
        const displayedPartID = this.props.ID;
        const displayedPart = this.props.parts[displayedPartID];

        return(
            <ProductView displayedPart={displayedPart}/>
        )
    }

}

export default connect(
    state => ({
        parts: state.parts.data,
    }),
)(Product);