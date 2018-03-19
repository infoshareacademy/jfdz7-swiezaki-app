import React, { Component } from 'react';

import PartsList from './PartsList';

class Browser extends Component {

    state = {
        parts: [],
        vehicle: 'osobowe',
        category: 'nowe',
        producer: '',
        userInput: '',
        showEmptyMessage: false
    };

    componentDidMount() {
        fetch(process.env.PUBLIC_URL + '/data/carParts.json')
            .then(response => response.json())
            .then(data => this.setState({ parts: data }))
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value,
            showEmptyMessage: true
        });
    };

    handleInput = ({ target: { value } }) => {
        this.setState({
            userInput: value.toLowerCase(),
            showEmptyMessage: true
        });
    };

    changeMessageState = () => {
        this.setState({showEmptyMessage: false});
    };


    render() {

        const uniqueCategoriesFromState = [...(new Set(this.state.parts.map(({ producer }) => producer)))];


        return (
            <React.Fragment>

                <input type="radio" name="vehicle" value="osobowe"
                       onChange={ this.handleChange }
                       checked={ this.state.vehicle === 'osobowe' }
                />osobowe

                <input type="radio" name="vehicle" value="ciężarowe"
                       onChange={ this.handleChange }
                       checked={ this.state.vehicle === 'ciężarowe' }
                />ciężarowe

                <input type="radio" name="category" value="nowe"
                       onChange={ this.handleChange }
                       checked={ this.state.category === 'nowe' }
                />nowe

                <input type="radio" name="category" value="używane"
                       onChange={ this.handleChange }
                       checked={ this.state.category === 'używane' }
                />używane
                &nbsp;
                <select name="producer" onChange={ this.handleChange }>
                    <option value=''>Wszystkie marki</option>
                    {
                       uniqueCategoriesFromState.map((category, idx) =>

                            <option value={ category } key={ idx } >
                                { category }
                            </option>

                    )}
                </select>
                <br/>
                <input type="text" size="40" placeholder="Wprowadź nazwę części, np. hamulec" onChange={ this.handleInput } />
                <br/>
                {
                    !this.state.showEmptyMessage ?
                        <div style={{marginTop: '10px'}}>Lista części spełniających kryteria &darr; ({ document.getElementsByTagName('li').length })</div>
                                            :
                        <div style={{margin: '10px 0'}}>:/ Brak części spełniających podane kryteria</div>
                }

                { this.state.parts.map((part, idx) =>

                    part.vehicle === this.state.vehicle &&
                    part.category === this.state.category &&
                    part.producer.includes(this.state.producer) &&
                    part.name.toLowerCase().includes(this.state.userInput) ?

                    <PartsList
                        id = { part.id }
                        name={ part.name.toLowerCase() }
                        producer={ part.producer }
                        type={ part.type }
                        date={ part.date }
                        key={ idx }
                        changeMessageState={ this.changeMessageState }
                    />
                        :
                        null
                )}

            </React.Fragment>
        );
    }
}

export default Browser;