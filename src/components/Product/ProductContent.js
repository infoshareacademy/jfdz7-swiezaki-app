import React, { Component } from 'react';
import { Modal, Image, List, Divider } from 'semantic-ui-react';

class ProductContent extends Component {

    getBrutto = (netto) => {
        const VATRate = 23;
        const nettoParsed = parseFloat(netto);
        const VAT = (VATRate/100) * nettoParsed;
        return (nettoParsed + VAT).toFixed(2);
    };

    render() {

        const {
            category, type, kind, quantity, producer, brand, producerCode, EanCode, date, condition, shopUrl, shop, phone, price, image, description
        } = this.props.displayedPart;

        return(
            <Modal.Content image scrolling>

                <Image src={image} size="big" wrapped />

                <Modal.Description className="modalDescription">

                    <List>

                        <List.Item>Rodzaj: {type}&nbsp;{kind}</List.Item>
                        <List.Item>Ilość: &nbsp;{quantity}</List.Item>
                        <List.Item>Producent: &nbsp;{producer}</List.Item>
                        <List.Item>Pasuje do auta:&nbsp;{brand}</List.Item>
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
        )

    }

}

export default ProductContent