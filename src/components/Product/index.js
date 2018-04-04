import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Modal, List, Label, Divider, Button, Icon, Popup, TransitionablePortal } from 'semantic-ui-react';

import { closeModal } from "../../state/product";
import AddToFavsBtn from '../Shared/AddToFavsBtn';

class Product extends Component {

    handleCloseBtn = () => {
        this.props.closeModal()
    };

    getBrutto = (netto) => {
        const nettoParsed = parseFloat(netto);
        const VAT = (23/100) * nettoParsed;
        return (nettoParsed + VAT).toFixed(2);
    };

    render() {

        const displayedPartID = this.props.ID;
        const displayedPart = this.props.parts[displayedPartID];

        const {
            id,
            vehicle,
            category,
            name,
            brand,
            producer,
            type,
            kind,
            quantity,
            producerCode,
            EanCode,
            date,
            condition,
            shop,
            shopUrl,
            phone,
            price,
            image,
            description
        } = displayedPart;

        return (

            <TransitionablePortal
            open={this.props.currentlyOpenedModal === id}
            transition={{animation: "drop", duration: 800}}
            >

            <Modal
                open={true}
                className="modalCentered"
            >

                <Label color="red" ribbon>
                    {vehicle.toUpperCase()}
                    &nbsp; / &nbsp;
                    {category.toUpperCase()}
                    </Label>

                <Modal.Header>
                    {name}
                    <div className="modalTopRightButtons">
                        <AddToFavsBtn partID={ id }/>
                        <Popup
                            content="Zamknij okno"
                            on='hover'
                            trigger={
                                <Button
                                    icon
                                    size="mini"
                                    color="red"
                                    onClick={this.handleCloseBtn}>
                                    <Icon name="close"/>
                                </Button>
                            }
                        />
                    </div>
                </Modal.Header>

                <Modal.Content image scrolling>
                    <Image size="big" src={image} wrapped/>
                    <Modal.Description>

                        <List>
                            <List.Item>Pasuje do auta:&nbsp;{brand}</List.Item>
                            <List.Item>Producent: &nbsp;{producer}</List.Item>
                            <List.Item>Rodzaj: {type}&nbsp;{kind}</List.Item>
                            <List.Item>Ilość: &nbsp;{quantity}</List.Item>
                            <Divider/>
                            <List.Item>Kod producenta:&nbsp;{producerCode}</List.Item>
                            <List.Item>Kod EAN:&nbsp;{EanCode}</List.Item>
                            <Divider/>
                            <List.Item>Rok produkcji:&nbsp;{date}</List.Item>
                            { category !== "nowe" && <List.Item>Stan:&nbsp;{condition}</List.Item> }
                            { category === "nowe" && <List.Item>Kupisz w:&nbsp;<a href={shopUrl} target="_blank">{shop}</a></List.Item> }
                            { category !== "nowe" && <List.Item>Telefon do sprzedawcy:&nbsp;{phone}</List.Item> }
                            <Divider/>
                            <List.Item>Cena netto:&nbsp;{price}&nbsp;PLN</List.Item>
                            <List.Item>Cena brutto:&nbsp;{this.getBrutto(price)}&nbsp;PLN</List.Item>
                            <Divider/>
                            <List.Item>{description}</List.Item>
                        </List>

                    </Modal.Description>
                </Modal.Content>

            </Modal>

            </TransitionablePortal>
        );
    }
}

export default connect(
    state => ({
        parts: state.parts.data,
        currentlyOpenedModal: state.product.currentlyOpenedModal
    }),
    { closeModal }
)(Product);