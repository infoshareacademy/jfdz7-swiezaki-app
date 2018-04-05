import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Popup } from 'semantic-ui-react';

import { addFavPart } from "../../state/favourites";

class AddToFavsBtn extends Component {

    handleAddFavPartBtn = () => {
        const partID = this.props.partID;
        this.props.addFavPart(partID)
    };

    renderButton = (message, color) => {

        return (
            <Popup
                content={message}
                on='hover'
                trigger={
                    <Button
                        icon
                        color={color}
                        size='mini'
                        onClick={this.handleAddFavPartBtn}>
                        <Icon name='heart'/>
                    </Button>
                }
            />
        )
    };

    render() {

        let currentMessage = 'Dodaj tę część do ulubionych.';
        let currentColor = 'red';

        if (this.props.favPartsIDs.includes(this.props.partID)) {
            currentMessage = 'Część dodana do ulubionych.';
            currentColor = 'grey'
        }

         return this.renderButton(currentMessage, currentColor)

    }

}

export default connect(
    state => ({
        favPartsIDs: state.favourites.favPartsIDs,
    }),
    { addFavPart }
)(AddToFavsBtn)