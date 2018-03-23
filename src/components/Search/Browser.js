import React, { Component } from 'react';
import { connect } from 'react-redux';

import PartsList from './PartsList';
import { fetchParts } from "../../state/parts";
import { toggleFilter, userInputFilter } from "../../state/filters";

class Browser extends Component {

    componentDidMount() {
        this.props.fetchParts();
    }

    render() {

        return (
            <React.Fragment>

                { this.props.error && <p>{ this.props.error.message }</p> }
                { this.props.isFetching && <p>Pobieram dane...</p> }

                    <input type="radio" name="vehicle" value="osobowe"
                    onChange={this.props.toggleFilter}
                    checked={this.props.vehicle === 'osobowe'}
                    />osobowe

                    <input type="radio" name="vehicle" value="ciężarowe"
                    onChange={this.props.toggleFilter}
                    checked={this.props.vehicle === 'ciężarowe'}
                    />ciężarowe

                    <input type="radio" name="category" value="nowe"
                    onChange={this.props.toggleFilter}
                    checked={this.props.category === 'nowe'}
                    />nowe

                    <input type="radio" name="category" value="używane"
                    onChange={this.props.toggleFilter}
                    checked={this.props.category === 'używane'}
                    />używane
                    &nbsp;
                    { this.props.parts && !this.props.isFetching && <select name="brand" onChange={this.props.toggleFilter}>
                    <option value=''>Wszystkie marki</option>
                    {
                        [...(new Set(this.props.parts.map(({brand}) => brand)))].map((category, idx) =>

                            <option value={category} key={idx}>
                                {category}
                            </option>
                        )
                    }
                    </select> }
                    <br/>
                    <input type="text" size="40" placeholder="Wprowadź nazwę części, np. hamulec" onChange={this.props.userInputFilter} />
                    <br/>

                    { this.props.partsCounter > 0 ?
                        <div>Lista części spełniających podane kryteria &darr; ({this.props.partsCounter})</div>
                        :
                        <div>Brak części spełniającej podane kryteria :/</div>
                    }

                    {this.props.parts && this.props.parts.map((part, idx) =>

                    part.vehicle === this.props.vehicle &&
                    part.category === this.props.category &&
                    part.brand.includes(this.props.brand) &&
                    part.name.toLowerCase().includes(this.props.userInput) ?

                    <PartsList
                    id = {part.id}
                    name={part.name.toLowerCase()}
                    date={part.date}
                    price={part.price}
                    image={part.image}
                    key={idx}
                    />
                    :
                       null
                    )}

            </React.Fragment>
        );
    }
}

export default connect(state => ({
    parts: state.parts.data,
    isFetching: state.parts.isFetching,
    error: state.parts.error,
    category: state.filters.category,
    vehicle: state.filters.vehicle,
    brand: state.filters.brand,
    userInput: state.filters.userInput,
    showEmptyMessage: state.filters.showEmptyMessage,
    partsCounter: state.filters.partsCounter
    }), { fetchParts, toggleFilter, userInputFilter })(Browser)