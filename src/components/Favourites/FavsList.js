import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FavsList extends Component {

    handleRemove = event => {
        const favPartId = event.target.dataset.favpartId;
        this.props.removeFavPart(favPartId);
    };

    render() {

        const { favParts } = this.props;

        return (
            <React.Fragment>
                <ul>
                    {
                        favParts.map(favPart =>
                            <li key={favPart.id}>
                                <Link to={`/search/${ favPart.id }`}><strong>{favPart.name}</strong></Link>
                                <br/>
                                &nbsp;
                                producent: {favPart.producer},
                                &nbsp;
                                rodzaj: {favPart.type},
                                &nbsp;
                                rok produkcji: {favPart.date}
                                <br/>
                                <button
                                    data-favpart-id={favPart.id}
                                    onClick={ this.handleRemove }>Usuń z ulubionych</button>
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
