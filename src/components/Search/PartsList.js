import React, { Component } from 'react';

class PartsList extends Component {

    render() {

        const { name, producer, type, date } = this.props;

        return (
            <React.Fragment>
                <ul>
                    <li>{ name } <strong>{ producer }</strong> { type } { date }</li>
                </ul>
            </React.Fragment>
        );
    }
}

export default PartsList;