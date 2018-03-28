import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Icon } from 'semantic-ui-react'

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
                <Link to={`/search`}>
                    <Button primary size="huge">
                        <Icon name="reply" />
                        Wróć do wyszukiwarki
                    </Button>
                </Link>
            </Container>
        )
    };

}

export default Favourites