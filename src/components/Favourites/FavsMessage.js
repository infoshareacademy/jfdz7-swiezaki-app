import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Message } from 'semantic-ui-react';

class FavsMessage extends Component {

    render() {

        return (
            <React.Fragment>
                {this.props.favPartsIDs.length === 0 &&
                <Message>
                    <Message.Header>
                        Pusto tutaj!
                    </Message.Header>
                    <p>
                        Wróć do wyszukiwarki i dodaj jakieś części, aby zachować je w ulubionych i później łatwo do nich
                        powrócić.
                    </p>
                </Message>
                }
            </React.Fragment>
        )
    }

}

export default connect(
    state => ({
        favPartsIDs: state.favourites.favPartsIDs
    }),
)(FavsMessage)