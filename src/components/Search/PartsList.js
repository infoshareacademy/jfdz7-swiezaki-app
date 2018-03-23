import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { incrementPartsCounter } from '../../state/filters';

class PartsList extends Component {

    componentWillMount() {
        this.props.incrementPartsCounter();
    }

    handleAddToFavsBtn = () => {
        const currentPart = this.props;

        let currentFavParts = JSON.parse((localStorage.getItem('carPartsBrowserFavParts') || '[]'));
        localStorage.setItem('carPartsBrowserFavParts', JSON.stringify(currentFavParts));

        currentFavParts = currentFavParts.filter(part => {
            return part.id !== currentPart.id
        });

        const updatedFavParts = currentFavParts.concat(currentPart);
        localStorage.setItem("carPartsBrowserFavParts", JSON.stringify(updatedFavParts))
    };
    
    render() {

        const { id, name, date, price, image } = this.props;

        return (

            <React.Fragment>
                <ul>
                    <li>
                        <Link to={`/search/${ id }`}><img src={ image } alt='car part' style={{"width": "50px"}} /><strong>{ name }</strong> | { date } | { price }</Link>
                        <br/>
                        <button onClick={ this.handleAddToFavsBtn }>Dodaj do ulubionych</button>
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default connect(null, { incrementPartsCounter })(PartsList);