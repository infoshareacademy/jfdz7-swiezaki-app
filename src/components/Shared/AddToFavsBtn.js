import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFavPart } from "../../state/favourites";

class AddToFavsBtn extends Component {

    handleAddFavPartBtn = () => {
        const partID = this.props.partID;
        this.props.addFavPart(partID)
    };

    render() {
        return (<button onClick={ this.handleAddFavPartBtn }>Dodaj do ulubionych</button>)
    }

}

export default connect(
    state => ({
        favPartsIDs: state.favourites.favPartsIDs
    }),
    { addFavPart }
)(AddToFavsBtn)