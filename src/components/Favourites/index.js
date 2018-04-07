import React, { Component } from 'react';
import { Container, Divider } from 'semantic-ui-react';

import FavsHeader from './FavsHeader';
import FavsList from './FavsList';
import FavsMessage from './FavsMessage';

class Favourites extends Component {

    render() {

        return (
            <Container>
                <FavsHeader/>
                <Divider/>
                <FavsMessage/>
                <FavsList/>
                <Divider/>
            </Container>
        )
    };

}

export default Favourites