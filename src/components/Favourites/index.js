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

    componentDidUpdate() {
        localStorage.setItem("carPartsBrowserFavParts", JSON.stringify(this.state.favParts))
    } // updating local storage with current state in case some parts were removed

}

export default Favourites