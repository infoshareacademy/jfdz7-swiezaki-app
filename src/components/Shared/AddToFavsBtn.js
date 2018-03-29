import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon } from 'semantic-ui-react';

import { addFavPart } from "../../state/favourites";

class AddToFavsBtn extends Component {

    handleAddFavPartBtn = () => {
        const partID = this.props.partID;
        this.props.addFavPart(partID)
    };

    render() {
        return (
            <Button
                icon
                color='red'
                onClick={ this.handleAddFavPartBtn }>
                <Icon name='heart' />
        </Button>
        )
    }

}

export default connect(
    state => ({
        favPartsIDs: state.favourites.favPartsIDs
    }),
    { addFavPart }
)(AddToFavsBtn)