import React, { Component } from 'react';
import { connect } from 'react-redux';

import PartsList from './PartsList';
import { fetchParts } from "../../state/parts";

class Browser extends Component {

    componentDidMount() {
        this.props.fetchParts()
    }

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

        if (!this.props.isFetching && this.props.parts) {
            const uniqueCategoriesFromState = [...(new Set(this.props.parts.map(({producer}) => producer)))];
        }


        return (
            <React.Fragment>

                { this.props.error && <p>{ this.props.error.message }</p> }
                { this.props.isFetching && <p>Pobieram dane...</p> }

                    <input type="radio" name="vehicle" value="osobowe"
                    onChange={this.handleChange}
                    checked={this.props.vehicle === 'osobowe'}
                    />osobowe

                    <input type="radio" name="vehicle" value="ciężarowe"
                    onChange={this.handleChange}
                    checked={this.props.vehicle === 'ciężarowe'}
                    />ciężarowe

                    <input type="radio" name="category" value="nowe"
                    onChange={this.handleChange}
                    checked={this.props.category === 'nowe'}
                    />nowe

                    <input type="radio" name="category" value="używane"
                    onChange={this.handleChange}
                    checked={this.props.category === 'używane'}
                    />używane
                    &nbsp;
                    {/*<select name="producer" onChange={this.handleChange}>*/}
                    {/*<option value=''>Wszystkie marki</option>*/}
                    {/*{*/}
                       {/*uniqueCategoriesFromState.map((category, idx) =>*/}

                            {/*<option value={category} key={idx}>*/}
                                {/*{category}*/}
                            {/*</option>*/}
                        {/*)*/}
                    {/*}*/}
                    {/*</select>*/}
                    <br/>
                    <input type="text" size="40" placeholder="Wprowadź nazwę części, np. hamulec" onChange={this.handleInput} />
                    <br/>
                {
                    !this.props.showEmptyMessage ?
                    <div style={{marginTop: '10px'}}>Lista części spełniających kryteria &darr; ({document.getElementsByTagName('li').length})</div>
                    :
                    <div style={{margin: '10px 0'}}>:/ Brak części spełniających podane kryteria</div>
                }

                {this.props.parts && this.props.parts.map((part, idx) =>

                    part.vehicle === this.props.vehicle &&
                    part.category === this.props.category &&
                    part.producer.includes(this.props.producer) &&
                    part.name.toLowerCase().includes(this.props.userInput) ?

                    <PartsList
                    id = {part.id}
                    name={part.name.toLowerCase()}
                    producer={part.producer}
                    type={part.type}
                    date={part.date}
                    key={idx}
                    changeMessageState={this.changeMessageState}
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
    category: state.parts.category,
    vehicle: state.parts.vehicle,
    producer: state.parts.producer,
    userInput: state.parts.userInput,
    showEmptyMessage: state.parts.showEmptyMessage
    }), { fetchParts })(Browser)