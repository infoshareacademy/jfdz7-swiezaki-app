import React, { Component } from 'react';

import PartsList from './PartsList';

class Browser extends Component {

    state = {
        parts: [
            { "id": 1, "truck": false, "new": false, "name": "hamulec", "producer": "Opel", "type": "tarczowy", "date": 1998 },
            { "id": 2, "truck": false, "new": false, "name": "hamulec", "producer": "Mazda", "type": "tarczowy", "date": 1999 },
            { "id": 3, "truck": false, "new": false, "name": "hamulec", "producer": "Toyota", "type": "tarczowy", "date": 1995 },
            { "id": 4, "truck": false, "new": false, "name": "hamulec", "producer": "BMW", "type": "tarczowy", "date": 2009 },
            { "id": 5, "truck": false, "new": false, "name": "hamulec", "producer": "Fiat", "type": "tarczowy", "date": 1999 }
        ]
    };

    render() {
        return (
            <React.Fragment>
                <input type="radio" name="truck" value="true" checked />osobowe
                <input type="radio" name="truck" value="false" />ciężarowe
                <input type="radio" name="new" value="true" checked />nowe
                <input type="radio" name="new" value="false" />używane
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