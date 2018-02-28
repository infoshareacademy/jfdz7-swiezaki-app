import React, { Component } from 'react';

class PartsList extends Component {
    render() {
        return (
            <React.Fragment>
                <ul>
                    <li>{ this.props.name } <strong>{ this.props.producer }</strong> { this.props.type } { this.props.date }</li>
                </ul>
            </React.Fragment>
        );
    }
}

export default PartsList;