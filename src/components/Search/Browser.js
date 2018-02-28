import React, { Component } from 'react';

class Browser extends Component {
    render() {
        return (
            <React.Fragment>
                <input type="text" size="40" />
                <button>Wyszukaj</button>
            </React.Fragment>
        );
    }
}

export default Browser;