import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Icon } from 'semantic-ui-react'

import FavsHeader from './FavsHeader';
import FavsList from './FavsList';
import FavsMessage from './FavsMessage';

class Favourites extends Component {

    state = {
        favParts: []
    };

    componentWillMount() {

        let favPartsFromStorage;

        !localStorage.getItem("carPartsBrowserFavParts") ?
            favPartsFromStorage = []
            :
            favPartsFromStorage = JSON.parse(localStorage.getItem("carPartsBrowserFavParts"));
        /* This check is necessary to prevent an error caused by trying to get data from null
            (in case user didn't add anything to favourites yet)*/

        this.setState({
            favParts: favPartsFromStorage
        })

    };

    removeFavPart = favPartId => {
        this.setState({
            favParts: this.state.favParts.filter(favPart => favPart.id !== favPartId)
        });
    };

    render() {

        return (
            <Container>
                <FavsHeader/>
                <Divider/>
                <FavsMessage favParts={this.state.favParts}/>
                <FavsList favParts={this.state.favParts} removeFavPart={this.removeFavPart}/>
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