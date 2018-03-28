import React, { Component } from 'react';
import Browser from './Browser';

import { Container } from 'semantic-ui-react';

class Search extends Component {

    render() {
        return (
            <Container>
                <Browser />
            </Container>
        )
    }
}

export default Search