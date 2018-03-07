import React, { Component } from 'react';

class FavsList extends Component {

    render() {

        const { favs } = this.props;

        return (
            <React.Fragment>
                <ul>
                    {
                        favs.map((favPart, id) =>
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
