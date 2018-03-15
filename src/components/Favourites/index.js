import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import FavsList from './FavsList';

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
            <React.Fragment>
                <h2>Obserwowane produkty:</h2>
                <FavsList favParts={this.state.favParts} removeFavPart={this.removeFavPart}/>
                <Link to={`/search`}>
                    <button>Wróć do wyszukiwarki</button>
                </Link>
            </React.Fragment>
        )
    };

    componentDidUpdate() {
        localStorage.setItem("carPartsBrowserFavParts", JSON.stringify(this.state.favParts))
    } // updating local storage with current state in case some parts were removed

}

export default Favourites