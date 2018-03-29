import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Icon, Popup } from 'semantic-ui-react';

import { addFavPart } from "../../state/favourites";

const initialState = {
    color: 'red',
    messsage: 'Dodaj tę część do ulubionych.'
};

class AddToFavsBtn extends Component {

    state = {
        color: '',
        messsage: ''
    };

    handleAddFavPartBtn = () => {
        const partID = this.props.partID;
        this.props.addFavPart(partID)
    };

    componentWillMount() {

        this.props.favPartsIDs.includes(this.props.partID) ?
            this.setState({
                color: 'grey',
                messsage: 'Część dodana do ulubionych.'
            })
            :
            this.setState({...initialState})

    }

    componentWillReceiveProps(nextProps) {

        nextProps.favPartsIDs.includes(this.props.partID) ?
            this.setState({
                color: 'grey',
                messsage: 'Część dodana do ulubionych.'
            })
            :
            this.setState({...initialState})

    }

    render() {

        const color = this.state.color;
        const message = this.state.messsage;

        return (
            <React.Fragment>

            <Popup
                content={message}
                on='hover'
                trigger={
                    <Button
                        icon
                        color={color}
                        size='mini'
                        onClick={ this.handleAddFavPartBtn }>
                        <Icon name='heart' />
                    </Button>
                }
                />

            </React.Fragment>
        )
    }

}

export default connect(
    state => ({
        favPartsIDs: state.favourites.favPartsIDs,
    }),
    { addFavPart }
)(AddToFavsBtn)