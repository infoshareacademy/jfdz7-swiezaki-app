import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Input } from 'semantic-ui-react';

import { signUp } from '../../state/auth'

class SignUpForm extends Component {
    state = {
        email: '',
        password: '',
        error: null
    }

    handleSubmit = event => {
        event.preventDefault()

        const { email, password, error, ...userData } = this.state

        this.props
            .signUp(email, password, userData)
            .catch(error => this.setState({ error }))
    }

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    }

    renderInput(fieldName, type = 'text') {
        return (
            <Input
                name={fieldName}
                value={this.state[fieldName]}
                type={type}
                onChange={this.handleChange}
            />
        )
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                {this.state.error && <p>{this.state.error.message}</p>}
                <div>Adres email: {this.renderInput('email')}</div>
                <div>Hasło: {this.renderInput('password', 'password')}</div>
                <Button size='tiny' color='red'>Zapisz się!</Button>
            </form>
        )
    }
}

export default connect(null, { signUp })(SignUpForm)