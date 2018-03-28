import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Form, Input } from 'semantic-ui-react';

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

    renderInput(fieldName, type = 'text', placeholder) {
        return (
            <Input
                name={fieldName}
                value={this.state[fieldName]}
                type={type}
                placeholder={placeholder}
                onChange={this.handleChange}
            />
        )
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                {this.state.error && <p>{this.state.error.message}</p>}
                <Form.Field>{this.renderInput('email', 'email', 'E-mail')}</Form.Field>
                <Form.Field>{this.renderInput('password', 'password', 'Hasło')}</Form.Field>
                <Button fluid size='tiny' color='red'>Zarejestruj się!</Button>
            </Form>
        )
    }
}

export default connect(null, { signUp })(SignUpForm)