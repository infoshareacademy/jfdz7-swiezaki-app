import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementPartsCounter } from '../../state/filters';

import { Image, List } from 'semantic-ui-react';

import AddToFavsBtn from '../Shared/AddToFavsBtn';

class PartsList extends Component {

    componentDidMount() {
        this.props.incrementPartsCounter();
    }

    render() {

        const { id, name, date, price, image } = this.props;

        return (

            <React.Fragment>
                <List selection verticalAlign='middle' size='large'>

                    <List.Item>
                        <Image avatar src={ image } />
                        <List.Content>
                            <List.Header>
                              <Link to={`/products/${ id }`}>
                                { name }
                              </Link>
                            </List.Header>
                            <List.Description>
                                rok produkcji: { date } | cena: <strong>{ price }</strong>
                                <AddToFavsBtn partID={ id }/>
                            </List.Description>
                        </List.Content>
                    </List.Item>

                </List>
            </React.Fragment>
        );
    }
}

export default connect(null, { incrementPartsCounter })(PartsList);