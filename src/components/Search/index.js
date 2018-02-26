import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <React.Fragment>
                <input type="text" size="40" />
                <button>Wyszukaj</button>
            </React.Fragment>
        )
    }
}

export default Search