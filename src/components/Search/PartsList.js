import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PartsList extends Component {

    componentWillMount() {
        this.props.changeMessageState();
    }

    handleAddToFavsBtn = () => {
        const currentPart = this.props;
        let currentFavParts;

        // checking if a list of fav parts has been previously created in LS
        if ( !localStorage.getItem("carPartsBrowserFavParts") ) {
            localStorage.setItem("carPartsBrowserFavParts", JSON.stringify([]));
            currentFavParts = JSON.parse(localStorage.getItem("carPartsBrowserFavParts"));
        } else {
            currentFavParts = JSON.parse(localStorage.getItem("carPartsBrowserFavParts"));
        }

        // adding current part and sending updated array to LS
        const updatedFavParts = currentFavParts.concat(currentPart);
        localStorage.setItem("carPartsBrowserFavParts", JSON.stringify(updatedFavParts))
    }

    render() {

        const { id, name, producer, type, date } = this.props;

        return (

            <React.Fragment>
                <ul>
                    <li>
                        <Link to={`/search/${ id }`}>{ name } | <strong>{ producer } </strong>
                            | { type } | { date }</Link>
                        <br/>
                        <button onClick={ this.handleAddToFavsBtn }>Dodaj do ulubionych</button>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default PartsList;