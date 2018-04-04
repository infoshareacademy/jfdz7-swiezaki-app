/*
If you're going to import this component, please note:
1) It will render as current product's photo. Clicking this photo will trigger modal to open.
2) It requires current product's ID passed inside props (as "ID").
3) If you want to render product's photo as an avatar (small image), you need to pass "true" to "isAvatar" props value
(see PartsList.js for reference).
 */

/*
                trigger={<Image src={image}
                                avatar={this.props.isAvatar}
                                style={{'cursor': 'pointer'}}/>}
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Modal, List, Label, Divider } from 'semantic-ui-react';

import AddToFavsBtn from '../Shared/AddToFavsBtn';

class Product extends Component {

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

            <Modal
                open={this.props.currentlyOpenedModal === id}

                style={{'marginTop': '0 !important',
                    'marginLeft': 'auto',
                    'marginRight': 'auto',
                    'position': 'relative',
                    'top': '20vh'}}
            >
                {/* These styles are temporary - Modal positioning requires Media Queries
                to work correctly, so I will put this in a separate stylesheet later. */}

                <Label color='red' ribbon>
                    {vehicle.toUpperCase()}
                    &nbsp; / &nbsp;
                    {category.toUpperCase()}
                    </Label>

                <Modal.Header>
                    {name}
                    <div style={{'float': 'right'}}>
                        <AddToFavsBtn partID={ id }/>
                    </div>
                </Modal.Header>

                <Modal.Content image scrolling>
                    <Image size='big' src={image} wrapped/>
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
        );
    }
}

export default connect(
    state => ({
        parts: state.parts.data,
        favPartsIDs: state.favourites.favPartsIDs,
        currentlyOpenedModal: state.product.currentlyOpenedModal
    })
)(Product);