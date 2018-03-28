import React, { Component } from 'react';

class AddToFavsBtn extends Component {

    handleAddToFavsBtn = () => {
        const { currentPart } = this.props;

        let currentFavParts = JSON.parse((localStorage.getItem('carPartsBrowserFavParts') || '[]'));
        localStorage.setItem('carPartsBrowserFavParts', JSON.stringify(currentFavParts));

        currentFavParts = currentFavParts.filter(part => {
            return part.id !== currentPart.id
        });

        const updatedFavParts = currentFavParts.concat(currentPart);
        localStorage.setItem("carPartsBrowserFavParts", JSON.stringify(updatedFavParts))
    };

    render() {
        return (<button onClick={ this.handleAddToFavsBtn }>Dodaj do ulubionych</button>)
    }

}

export default AddToFavsBtn