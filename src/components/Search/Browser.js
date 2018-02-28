import React, { Component } from 'react';

class Browser extends Component {
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
            </React.Fragment>
        );
    }
}

export default Browser;