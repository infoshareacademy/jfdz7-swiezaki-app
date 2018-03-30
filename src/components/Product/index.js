import React, { Component } from 'react';
import { connect } from 'react-redux';

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
            <React.Fragment>
                <p>{name}</p>
                <p>{vehicle}&nbsp;{category}</p>
                <p>Marka: &nbsp;{brand}</p>
                <p>Producent: &nbsp;{producer}</p>
                <p>Rodzaj: {type}&nbsp;{kind}</p>
                <p>Ilość: &nbsp;{quantity}</p>
                <p>Kod producenta:&nbsp;{producerCode}</p>
                <p>Kod EAN:&nbsp;{EanCode}</p>
                <p>Rok produkcji:&nbsp;{date}</p>
                <p>Stan:&nbsp;{condition}</p>
                <p>Kupisz w:&nbsp;{shop}{shopUrl}</p>
                <p>Telefon do sprzedawcy:&nbsp;{phone}</p>
                <p>Cena netto:&nbsp;{price}&nbsp;PLN</p>
                <p>Cena brutto:&nbsp;{this.getBrutto(price)}&nbsp;PLN</p>
                <p>Opis:&nbsp;{description}</p>
                <img src={image} alt={name}/>
            </React.Fragment>
        );
    }
}

export default connect(
    state => ({
        parts: state.parts.data,
        favPartsIDs: state.favourites.favPartsIDs
    })
)(Product);