import React, { Component } from 'react';

import PartsList from './PartsList';

class Browser extends Component {

    state = {
        parts: [
            { "id": 1, "vahicle": "osobowe", "category": "nowe", "name": "hamulec", "producer": "Opel", "type": "tarczowy", "date": 1998 },
            { "id": 2, "vehicle": "ciężarowe", "category": "używane", "name": "hamulec", "producer": "Mazda", "type": "tarczowy", "date": 1999 },
            { "id": 3, "vehicle": "osobowe", "category": "nowe", "name": "hamulec", "producer": "Toyota", "type": "tarczowy", "date": 1995 },
            { "id": 4, "vehicle": "osobowe", "category": "używane", "name": "hamulec", "producer": "BMW", "type": "tarczowy", "date": 2009 },
            { "id": 5, "vehicle": "ciężarowe", "category": "nowe", "name": "hamulec", "producer": "Fiat", "type": "tarczowy", "date": 1999 }
        ],

        vehicle: 'osobowe',
        category: 'nowe'
    };


    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        });

        name === 'vehicle' ?
            console.log(`samochody: ${ value }, części: ${ this.state.category }`) :
            console.log(`samochody: ${ this.state.vehicle }, części: ${ value }`);

    };

    render() {
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
                <input type="text" size="40" />
                <button>Wyszukaj</button>
                <br/>
                { this.state.parts.map((part,idx) =>
                    <PartsList id = { part.id } name={ part.name } producer= { part.producer } type={ part.type } date={ part.date } key={ idx }/>)}
            </React.Fragment>
        );
    }
}

export default Browser;