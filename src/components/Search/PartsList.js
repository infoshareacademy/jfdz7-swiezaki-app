import React, { Component } from 'react';
import { connect } from 'react-redux';
import { incrementPartsCounter, decrementPartsCounter } from '../../state/counter';
import { Image, List } from 'semantic-ui-react';
import { openModal } from "../../state/product";
import AddToFavsBtn from '../Shared/AddToFavsBtn';
import Product from "../Product";
import '../../css/browser.css';

class PartsList extends Component {

    componentDidMount() {
        this.props.incrementPartsCounter();
    }

    componentWillUnmount () {
        this.props.decrementPartsCounter();
    }

    handleModalVisibility = event => this.props.openModal(event.target.dataset.partId);

    render() {

        const { id, name, brand, date, price, image } = this.props;

        return (

            <React.Fragment>

                <Product ID={ id }/>

                <List selection verticalAlign='middle' size='big'>

                    <List.Item>
                        <Image
                               size='tiny'
                               src={ image }
                               onClick={ this.handleModalVisibility }
                               data-part-id={ id }
                               className="parts-list-img"
                        />
                        <List.Content>
                            <List.Header
                                onClick={ this.handleModalVisibility }
                                data-part-id={ id }
                            >
                                { name }
                            </List.Header>
                            <List.Description
                                onClick={ this.handleModalVisibility }
                                data-part-id={ id }
                            >
                                model: { brand } |
                                rok produkcji: { date } |
                                cena: <strong>{ price.replace('.',',') }</strong> PLN
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