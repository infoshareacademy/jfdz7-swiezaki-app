import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FavsList extends Component {

    render() {

        const { favParts, removeFavPart } = this.props;

        return (
            <React.Fragment>
                <ul>
                    {
                        favParts.map((favPart, id) =>
                            <li key={id}>
                                <Link to={`/search/${ favPart.id }`}><strong>{favPart.name}</strong></Link>
                                <br/>
                                &nbsp;
                                producent: {favPart.producer},
                                &nbsp;
                                rodzaj: {favPart.type},
                                &nbsp;
                                rok produkcji: {favPart.date}
                                <br/>
                                <button onClick={ () => removeFavPart(favPart.id) }>Usuń z ulubionych</button>
                                <br/>
                                &nbsp;
                            </li>
                        )
                    }
                </ul>
            </React.Fragment>
        )
    }
}

export default FavsList
