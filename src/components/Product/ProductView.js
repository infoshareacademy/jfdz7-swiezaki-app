import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TransitionablePortal, Modal, Label } from 'semantic-ui-react';

import ProductHeader from './ProductHeader';
import ProductContent from './ProductContent'

class ProductView extends Component {

    render() {

        const { id, vehicle, category } = this.props.displayedPart;

        return (

            <TransitionablePortal
                open={this.props.currentlyOpenedModal === id}
                transition={{animation: "drop", duration: 800}}
            >

                <Modal open={true} className="modalCentered">

                    <Label color="red" ribbon>
                        {vehicle.toUpperCase()}
                        &nbsp; / &nbsp;
                        {category.toUpperCase()}
                    </Label>

                    <ProductHeader displayedPart={this.props.displayedPart}/>
                    <ProductContent displayedPart={this.props.displayedPart}/>

                </Modal>

            </TransitionablePortal>
        );
    }
}

export default connect(
    state => ({
        currentlyOpenedModal: state.product.currentlyOpenedModal
    }),
)(ProductView);