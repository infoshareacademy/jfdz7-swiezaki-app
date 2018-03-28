import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addFavPart } from "../../state/favourites";

class AddToFavsBtn extends Component {

    handleAddFavPartBtn = () => {
        const { currentPart } = this.props;
        this.props.addFavPart(currentPart)
    };

    render() {
        return (<button onClick={ this.handleAddFavPartBtn }>Dodaj do ulubionych</button>)
    }

}

export default connect(
    state => ({
        favParts: state.favourites.favParts
    }),
    { addFavPart }
)(AddToFavsBtn)