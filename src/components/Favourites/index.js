import React, { Component } from 'react';

import FavsList from './FavsList';

class Favourites extends Component {

    state = {
        favs: [
            { "id": 1, "vehicle": "osobowe", "category": "nowe", "name": "hamulec", "producer": "Opel", "type": "tarczowy", "date": 1998 },
            { "id": 2, "vehicle": "ciężarowe", "category": "używane", "name": "hamulec", "producer": "Mazda", "type": "tarczowy", "date": 1999 },
            { "id": 3, "vehicle": "osobowe", "category": "nowe", "name": "kierownica", "producer": "Toyota", "type": "tarczowy", "date": 1995 },
            { "id": 4, "vehicle": "osobowe", "category": "używane", "name": "hAmulec", "producer": "BMW", "type": "tarczowy", "date": 2009 },
            { "id": 5, "vehicle": "ciężarowe", "category": "nowe", "name": "drzwi", "producer": "Fiat", "type": "tarczowy", "date": 1999 },
            { "id": 6, "vehicle": "ciężarowe", "category": "nowe", "name": "hamUlec", "producer": "Fiat", "type": "tarczowy", "date": 1999 },
            { "id": 7, "vehicle": "osobowe", "category": "nowe", "name": "Hamulec", "producer": "Fiat", "type": "tarczowy", "date": 1999 },
            { "id": 8, "vehicle": "ciężarowe", "category": "nowe", "name": "MASKA", "producer": "Fiat", "type": "tarczowy", "date": 1999 },
            { "id": 9, "vehicle": "osobowe", "category": "nowe", "name": "hamulec", "producer": "Fiat", "type": "tarczowy", "date": 1999 }
        ] // temporary data, added for the sake of testing. Will be removed after connecting Favourites to Search.
    };


    render() {

        return (
            <React.Fragment>
                <h2>Obserwowane produkty:</h2>
                <FavsList/>
            </React.Fragment>
        )
    }
}

export default Favourites