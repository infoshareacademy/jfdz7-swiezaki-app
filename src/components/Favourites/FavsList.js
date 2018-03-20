import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Card, Icon, Button } from 'semantic-ui-react'


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
                        mobile={16} tablet={8} computer={4} largeScreen={3} widescreen={3}>
                        <Card centered>
                                <Link to={`/search/${ favPart.id }`}>
                                    <Image src="/data/images/akumulator.png" />
                                </Link>
                                {/* This is temporary image, will be replaced after setting new JSON file */}
                            <Card.Content>
                                    <Card.Header>
                                        {favPart.name}
                                    </Card.Header>
                                    <Card.Meta>
                                        {favPart.producer}
                                    </Card.Meta>
                                <Card.Description>
                                    <p>
                                        <strong>Rodzaj: </strong>
                                        {favPart.type}
                                    </p>
                                    <p>
                                        <strong>Rok produkcji: </strong>
                                        {favPart.date}
                                    </p>
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                <Button
                                    color="red"
                                    data-favpart-id={favPart.id}
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

export default FavsList