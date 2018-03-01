import React, { Component } from 'react';

class Register extends Component {
    render() {

        return (
            <React.Fragment>
               <label>Nazwa użytkownika</label><br/><input type="name"/><br/>
                <label>Adres e-mail </label><br/><input type="email"/><br/>
                <label>Hasło </label><br/><input type="password"/><br/>
                <label>Powtórz hasło </label><br/><input type="password"/>
            </React.Fragment>
        );
    }
}

export default Register;