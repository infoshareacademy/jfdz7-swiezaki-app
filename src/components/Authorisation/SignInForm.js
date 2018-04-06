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

    changeErrorMessage = () => {
        let message = "";
        if (this.props.auth.error.code === 'auth/user-not-found') {
           message =  "Nieznany użytkownik. Zarejestruj się";
        }
        else if (this.props.auth.error.code === 'auth/wrong-password') {
            message = "Błędne hasło";
        }
        else if (this.props.auth.error.code === 'auth/invalid-email') {
            message = "Błędny adres e-mail";
        }
        return message;
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
        return (
            <Form onSubmit={this.handleSubmit}>
                 <p style={{"color": "red"}}>{this.props.auth.error ? this.changeErrorMessage() : null }</p>
                <Form.Field>{this.renderInput('email', 'email', 'E-mail')}</Form.Field>
                <Form.Field>{this.renderInput('password', 'password', 'Hasło')}</Form.Field>
                <Button fluid size='tiny' color='red'>Zaloguj</Button>
            </Form>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})

const mapDispatchToProps = dispatch => ({
    signIn: (email, password) => dispatch(signIn(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm)