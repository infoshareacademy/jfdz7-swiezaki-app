import React, { Component } from 'react';
import { connect } from 'react-redux';

class Product extends Component {

    render() {

        const displayedPartID = this.props.match.params.id;
        const displayedPart = this.props.parts[displayedPartID];
        console.log(displayedPartID);
        console.log(displayedPart);

        return (
            <React.Fragment>
                To jest produkt o id: { this.props.match.params.id }
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        parts: state.parts.data,
        favPartsIDs: state.favourites.favPartsIDs
    })
)(Product);