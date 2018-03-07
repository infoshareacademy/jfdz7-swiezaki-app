import React, { Component } from 'react';

class FavsList extends Component {

    render() {

        const { favParts, removeFavPart } = this.props;

        return (
            <React.Fragment>
                <ul>
                    {
                        favParts.map((favPart, id) =>
                            <li key={id}>
                                <strong>{favPart.name}</strong>
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
