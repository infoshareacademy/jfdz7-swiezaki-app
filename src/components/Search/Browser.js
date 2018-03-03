import React, { Component } from 'react';

import PartsList from './PartsList';

class Browser extends Component {

    state = {
        parts: [
            { "id": 1, "vehicle": "osobowe", "category": "nowe", "name": "hamulec", "producer": "Opel", "type": "tarczowy", "date": 1998 },
            { "id": 2, "vehicle": "ciężarowe", "category": "używane", "name": "hamulec", "producer": "Mazda", "type": "tarczowy", "date": 1999 },
            { "id": 3, "vehicle": "osobowe", "category": "nowe", "name": "kierownica", "producer": "Toyota", "type": "tarczowy", "date": 1995 },
            { "id": 4, "vehicle": "osobowe", "category": "używane", "name": "hAmulec", "producer": "BMW", "type": "tarczowy", "date": 2009 },
            { "id": 5, "vehicle": "ciężarowe", "category": "nowe", "name": "drzwi", "producer": "Fiat", "type": "tarczowy", "date": 1999 },
            { "id": 6, "vehicle": "ciężarowe", "category": "nowe", "name": "hamUlec", "producer": "Fiat", "type": "tarczowy", "date": 1999 },
            { "id": 7, "vehicle": "osobowe", "category": "nowe", "name": "Hamulec", "producer": "Fiat", "type": "tarczowy", "date": 1999 },
            { "id": 8, "vehicle": "ciężarowe", "category": "nowe", "name": "MASKA", "producer": "Fiat", "type": "tarczowy", "date": 1999 },
            { "id": 9, "vehicle": "osobowe", "category": "nowe", "name": "hamulec", "producer": "Fiat", "type": "tarczowy", "date": 1999 }
        ],

        vehicle: 'osobowe',
        category: 'nowe',
        userInput: ''
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });
    };

    handleInput = ({ target: { value } }) => {
        this.setState({
            userInput: value.toLowerCase()
        });
    };

    render() {

        console.log(this.state.userInput)
        return (
            <React.Fragment>

                <input type="radio" name="vehicle" value="osobowe"
                       onChange={ this.handleChange }
                       checked={ this.state.vehicle === 'osobowe' }
                />osobowe

                <input type="radio" name="vehicle" value="ciężarowe"
                       onChange={ this.handleChange }
                       checked={ this.state.vehicle === 'ciężarowe' }
                />ciężarowe

                <input type="radio" name="category" value="nowe"
                       onChange={ this.handleChange }
                       checked={ this.state.category === 'nowe' }
                />nowe

                <input type="radio" name="category" value="używane"
                       onChange={ this.handleChange }
                       checked={ this.state.category === 'używane' }
                />używane
                <br/>
                <input type="text" size="40" onChange={ this.handleInput } />
                <button>Wyszukaj</button>
                <br/>
                { this.state.parts.map((part, idx) =>

                    part.vehicle === this.state.vehicle &&
                    part.category === this.state.category &&
                    part.name.toLowerCase().includes(this.state.userInput) === true ?
                    <PartsList
                        id = { part.id }
                        name={ part.name.toLowerCase() }
                        producer= { part.producer }
                        type={ part.type }
                        date={ part.date }
                        key={ idx }
                    /> :
                        null

                )}

            </React.Fragment>
        );
    }
}

export default Browser;