import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Icon, Popup } from 'semantic-ui-react';

import AddToFavsBtn from '../Shared/AddToFavsBtn';
import { closeModal } from "../../state/product";

class ProductHeader extends Component {

    render() {

        const { id, name } = this.props.displayedPart;

        return(
            <Modal.Header>
                {name}
                <div className="modalTopRightButtons">
                    <AddToFavsBtn partID={id}/>
                    <Popup
                        content="Zamknij okno"
                        on='hover'
                        trigger={
                            <Button
                                icon
                                size="mini"
                                color="red"
                                onClick={this.props.closeModal}>
                                <Icon name="close"/>
                            </Button>
                        }
                    />
                </div>
            </Modal.Header>
        )

    }

}

export default connect(null,
    { closeModal }
)(ProductHeader);