import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Card, Icon } from 'semantic-ui-react'

class FavsList extends Component {

    handleRemove = event => {
        const favPartId = event.target.dataset.favpartId;
        this.props.removeFavPart(favPartId);
    };

    render() {

        const { favParts } = this.props;

        return (
            <Grid>
                {
                    favParts.map(favPart =>
                    <Grid.Column
                        key={favPart.id}
                        mobile={16} tablet={8} computer={4}>
                        <Card>
                            <Image src="/data/images/akumulator.png" />
                            <Card.Content>
                                <Link to={`/search/${ favPart.id }`}>
                                    <Card.Header>{favPart.name}</Card.Header>
                                </Link>
                                <Card.Meta>{favPart.producer}</Card.Meta>
                                <Card.Description>
                                    <p>Rodzaj: {favPart.type}</p>
                                    <p>Rok produkcji: {favPart.date}</p>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>

                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    )
                }
            </Grid>
        )
    }
}

export default FavsList

// render() {
//
//     const { favParts } = this.props;
//
//     return (
//         <React.Fragment>
//             <ul>
//                 {
//                     favParts.map(favPart =>
//                         <li key={favPart.id}>
//                             <Link to={`/search/${ favPart.id }`}><strong>{favPart.name}</strong></Link>
//                             <br/>
//                             &nbsp;
//                             producent: {favPart.producer},
//                             &nbsp;
//                             rodzaj: {favPart.type},
//                             &nbsp;
//                             rok produkcji: {favPart.date}
//                             <br/>
//                             <button
//                                 data-favpart-id={favPart.id}
//                                 onClick={ this.handleRemove }>Usuń z ulubionych</button>
//                             <br/>
//                             &nbsp;
//                         </li>
//                     )
//                 }
//             </ul>
//         </React.Fragment>
//     )
// }