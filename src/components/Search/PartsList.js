import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementPartsCounter, decrementPartsCounter } from '../../state/counter';
import { Image, List } from 'semantic-ui-react';
import { openModal } from "../../state/product";
import AddToFavsBtn from '../Shared/AddToFavsBtn';

class PartsList extends Component {

    componentDidMount() {
        this.props.incrementPartsCounter();
    }

    componentWillUnmount () {
        this.props.decrementPartsCounter();
    }

    handleModalVisibility = event => {
        const partID = event.target.dataset.favpartId;
        this.props.openModal(partID)
    };

    render() {

        const { id, name, date, price, image } = this.props;

        return (

            <React.Fragment>
                <List selection verticalAlign='middle' size='large'>

                    <List.Item>
                        <Image avatar src={ image } />
                        <List.Content>
                            <List.Header
                                onClick={ this.handleModalVisibility }
                                data-favpart-id={ id }
                            >
                                { name }
                            </List.Header>
                            <List.Description>
                                rok produkcji: { date } | cena: <strong>{ price.replace('.',',') }</strong> PLN
                                <AddToFavsBtn partID={ id }/>
                            </List.Description>
                        </List.Content>
                    </List.Item>

                </List>
            </React.Fragment>
        );
    }
}

export default connect(null, { incrementPartsCounter, decrementPartsCounter, openModal })(PartsList);