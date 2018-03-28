import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

class FavsMessage extends Component {

    constructor(props) {
        super(props);
        this.props.favParts.length === 0 ? this.state = {noFavParts: true} : this.state = {noFavParts: false};
    }

    render() {

        return (
        <Message hidden={!this.state.noFavParts}>
            <Message.Header>
                Pusto tutaj!
            </Message.Header>
            <p>
                Wróć do wyszukiwarki i dodaj jakieś części, aby zachować je w ulubionych i później łatwo do nich powrócić.
            </p>
        </Message>
        )
    }

}

export default connect(
    state => ({
        favParts: state.favourites.favParts
    }),
)(FavsMessage)