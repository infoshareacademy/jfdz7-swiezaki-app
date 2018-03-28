import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Card, Icon, Button } from 'semantic-ui-react';
import { connect } from 'react-redux'

import { removeFavPart } from "../../state/favourites";

class FavsList extends Component {

    handleRemove = event => {
        const favPartID = event.target.dataset.favpartId;
        this.props.removeFavPart(favPartID);
    };

    render() {

        const favPartsIDs = this.props.favPartsIDs;
        const parts = this.props.parts;

        return (
            <Grid>
                {
                    favPartsIDs.map(favPartID =>
                    <Grid.Column
                        key={favPartID}
                        mobile={16} tablet={8} computer={4} largeScreen={3} widescreen={3}>
                        <Card centered>
                                <Link to={ `/search/${ favPartID }`}>
                                    <Image src={ parts[favPartID].image } />
                                </Link>
                            <Card.Content>
                                    <Card.Header>
                                        { parts[favPartID].name }
                                    </Card.Header>
                                    <Card.Meta>

                                    </Card.Meta>
                                <Card.Description>
                                    <p>
                                        <strong>Rodzaj: </strong>
                                        { parts[favPartID].vehicle }
                                    </p>
                                    <p>
                                        <strong>Rok produkcji: </strong>
                                        { parts[favPartID].date }
                                    </p>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button
                                    color="red"
                                    data-favpart-id={ favPartID }
                                    onClick={ this.handleRemove }>
                                    <Icon name="remove circle" />
                                        Usuń z ulubionych
                                </Button>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    )
                }
            </Grid>
        )
    }
}

export default connect(
    state => ({
        favPartsIDs: state.favourites.favPartsIDs,
        parts: state.parts.data
    }),
    { removeFavPart }
)(FavsList)