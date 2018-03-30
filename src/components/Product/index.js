import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Modal, List } from 'semantic-ui-react';

import AddToFavsBtn from '../Shared/AddToFavsBtn';

class Product extends Component {

    getBrutto = (netto) => {
        const nettoParsed = parseFloat(netto);
        const VAT = (23/100) * nettoParsed;
        return (nettoParsed + VAT).toFixed(2);
    };

    render() {

        const displayedPartID = this.props.match.params.id;
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

            <Modal open={true} style={{'marginTop': '0'}}>
                <Modal.Header>{name}</Modal.Header>
                <Modal.Content image scrolling>
                    <Image size='big' src={image} wrapped/>
                    <Modal.Description>

                        <List celled >
                            <List.Item>{vehicle}&nbsp;{category}</List.Item>
                            <List.Item>Marka: &nbsp;{brand}</List.Item>
                            <List.Item>Producent: &nbsp;{producer}</List.Item>
                            <List.Item>Rodzaj: {type}&nbsp;{kind}</List.Item>
                            <List.Item>Ilość: &nbsp;{quantity}</List.Item>
                            <List.Item>Kod producenta:&nbsp;{producerCode}</List.Item>
                            <List.Item>Kod EAN:&nbsp;{EanCode}</List.Item>
                            <List.Item>Rok produkcji:&nbsp;{date}</List.Item>
                            <List.Item>Stan:&nbsp;{condition}</List.Item>
                            <List.Item>Kupisz w:&nbsp;{shop}&nbsp;{shopUrl}</List.Item>
                            <List.Item>Telefon do sprzedawcy:&nbsp;{phone}</List.Item>
                            <List.Item>Cena netto:&nbsp;{price}&nbsp;PLN</List.Item>
                            <List.Item>Cena brutto:&nbsp;{this.getBrutto(price)}&nbsp;PLN</List.Item>
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
        favPartsIDs: state.favourites.favPartsIDs
    })
)(Product);