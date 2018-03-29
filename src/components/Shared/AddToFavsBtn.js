import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Popup } from 'semantic-ui-react';

import { addFavPart } from "../../state/favourites";

class AddToFavsBtn extends Component {

    handleAddFavPartBtn = () => {
        const partID = this.props.partID;
        this.props.addFavPart(partID)
    };

    render() {
        return (
            <Popup
                content='Dodaj tę część do ulubionych.'
                on='hover'
                trigger={
                    <Button
                        icon
                        color='red'
                        size='mini'
                        onClick={ this.handleAddFavPartBtn }>
                        <Icon name='heart' />
                    </Button>
                }
                />
        )
    }

}

export default connect(
    state => ({
        favPartsIDs: state.favourites.favPartsIDs
    }),
    { addFavPart }
)(AddToFavsBtn)