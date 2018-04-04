import React, { Component } from 'react';
import { connect } from 'react-redux';

import PartsList from './PartsList';
import { fetchParts } from "../../state/parts";
import { toggleFilter, toggleSelect, userInputFilter } from "../../state/filters";

import { Input, Radio, Label, Icon } from 'semantic-ui-react';

class Browser extends Component {

    componentDidMount() {
        this.props.fetchParts();
    }

    render() {

        return (
            <React.Fragment>

                { this.props.error && <p>{ this.props.error.message }</p> }
                { this.props.isFetching && <p>Pobieram dane...</p> }

                <Radio toggle
                    label='osobowe'
                    name='vehicle'
                    value='osobowe'
                    checked={this.props.vehicle === 'osobowe'}
                    onChange={this.props.toggleFilter}
                    style={{"padding": "0 10px 10px 0"}}
                />
                <Radio toggle
                    label='ciężarowe'
                    name='vehicle'
                    value='ciężarowe'
                    checked={this.props.vehicle === 'ciężarowe'}
                    onChange={this.props.toggleFilter}
                    style={{"padding": "0 10px 10px 0"}}
                />
                <Radio toggle
                       label='nowe'
                       name='category'
                       value='nowe'
                       checked={this.props.category === 'nowe'}
                       onChange={this.props.toggleFilter}
                       style={{"padding": "0 10px 10px 0"}}
                />
                <Radio toggle
                       label='używane'
                       name='category'
                       value='używane'
                       checked={this.props.category === 'używane'}
                       onChange={this.props.toggleFilter}
                       style={{"padding": "0 10px 10px 0"}}
                />
                    &nbsp;
                { this.props.parts && !this.props.isFetching
                && <select name="brand" onChange={this.props.toggleSelect}
                style={{
                    "border": "1px solid #C2C2C2",
                    "background": "white",
                    "fontFamily": "Verdana, sans-serif",
                    "borderRadius": "7%",
                    "padding": "3px"
                }}>
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
                    <Input icon='search' iconPosition='left' size='large' style={{"width": "100%"}} placeholder="Wprowadź nazwę części, np. hamulec" onChange={this.props.userInputFilter} />
                    <br/>

                    { this.props.partsCounter > 0 ?
                        <Label style={{"marginTop": "10px"}}><Icon name='announcement' /> Liczba znalezionych części: {this.props.partsCounter}</Label>
                        :
                        <Label style={{"marginTop": "10px"}}><Icon name='warning' /> Brak części spełniającej podane kryteria wyszukiwania.</Label>
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
    }), { fetchParts, toggleFilter, toggleSelect, userInputFilter })(Browser)