import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Input } from 'semantic-ui-react';


import { signIn } from '../../state/auth';

class SignInForm extends Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = event => {
        event.preventDefault();

        this.props
            .signIn(this.state.email, this.state.password)
            .catch(error => this.setState({ error }))
    };

    handleChange = ({ target: { name, value } }) => {
        this.setState({
            [name]: value
        })
    };

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
        console.log(this.state.error);
        return (
            <Form onSubmit={this.handleSubmit}>
                {this.state.error && <p>{
                    this.state.error.code === 'auth/invalid-email' ?
                        'Błędny adres e-mail' : null
                }</p>}
                <Form.Field>{this.renderInput('email', 'email', 'E-mail')}</Form.Field>
                <Form.Field>{this.renderInput('password', 'password', 'Hasło')}</Form.Field>
                <Button fluid size='tiny' color='red'>Zaloguj</Button>
            </Form>
        )
    }
}

export default connect(null, { signIn })(SignInForm)