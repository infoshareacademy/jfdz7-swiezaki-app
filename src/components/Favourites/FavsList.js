import React, { Component } from 'react';
import { Grid, Card, Icon, Button, Transition } from 'semantic-ui-react';
import { connect } from 'react-redux'

import { removeFavPart } from "../../state/favourites";
import { fetchParts } from "../../state/parts";
import { openModal } from "../../state/product";

import Product from "../Product";

class FavsList extends Component {

    handleRemove = event => {
        const favPartID = event.target.dataset.favpartId;
        this.props.removeFavPart(favPartID);
    };

    handleModalVisibility = event => {
        console.log(event.target.dataset.favpartId);
        const partID = event.target.dataset.favpartId;
        this.props.openModal(partID)
    };

    shortenName = name => {
        const maxNameLength = 40;
        return name.length > maxNameLength ? `${ name.slice(0, maxNameLength - 3) }...` : name
    };

    componentDidMount() {
        this.props.fetchParts();
    };

    render() {

        const favPartsIDs = this.props.favPartsIDs;
        const parts = this.props.parts;

            return (
                <React.Fragment>

                    { this.props.error && <p>{ this.props.error.message }</p> }
                    { this.props.isFetching && <p>Pobieram dane...</p> }

                    { this.props.parts && !this.props.isFetching &&

                    <Transition.Group
                        as={Grid}
                        duration={500}
                        animation="scale"
                        centered
                        className="favGrid"
                    >

                    {favPartsIDs.map(favPartID =>
                            <Grid.Column
                                key={favPartID}
                                mobile={16} tablet={8} computer={4} largeScreen={3} widescreen={3}>
                                <Card centered className="favBox">
                                    <Product
                                        ID={favPartID}
                                        isAvatar={false}
                                    />
                                    <Card.Content className="favDetailsBox">
                                        <Card.Header
                                            data-favpart-id={favPartID}
                                            onClick={this.handleModalVisibility}
                                        >
                                            { this.shortenName(parts[favPartID].name) }
                                        </Card.Header>
                                        <Card.Meta>
                                            {parts[favPartID].vehicle}
                                        </Card.Meta>
                                        <Card.Description>
                                            <p>
                                                <strong>Cena: </strong>
                                                {parts[favPartID].price}
                                                &nbsp;PLN
                                            </p>
                                            <p>
                                                <strong>Rok produkcji: </strong>
                                                {parts[favPartID].date}
                                            </p>
                                        </Card.Description>
                                    </Card.Content>
                                    <Card.Content extra>
                                        <Button
                                            color="red"
                                            data-favpart-id={favPartID}
                                            onClick={this.handleRemove}>
                                            <Icon name="remove circle"/>
                                            Usuń z ulubionych
                                        </Button>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        )}

                    </Transition.Group>

                        }

                </React.Fragment>
            )}
}

export default connect(
    state => ({
        favPartsIDs: state.favourites.favPartsIDs,
        parts: state.parts.data,
        isFetching: state.parts.isFetching,
        error: state.parts.error
    }),
    { removeFavPart, fetchParts, openModal }
)(FavsList)