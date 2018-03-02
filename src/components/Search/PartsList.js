import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PartsList extends Component {

    render() {

        const { id, name, producer, type, date } = this.props;

        return (
            <React.Fragment>
                <ul>
                    <li>
                        <Link to={`/search/${ id }`}>{ name } | <strong>{ producer } </strong>
                            | { type } | { date }</Link>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default PartsList;