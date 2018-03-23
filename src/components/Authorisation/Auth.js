import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Auth extends Component {

       handleSubmit = () => {
        this.props.history.push('/search');
    };

    render() {
        return (
            <React.Fragment>
                <label>Adres e-mail</label><br/><input type="email"/><br/>
                <label>Hasło</label><br/><input type="password"/><br/>
                <button onClick={this.handleSubmit}>Zaloguj</button>
                <input type="checkbox"/><label>Zapamiętaj mnie</label>
            </React.Fragment>
        )
    }
}

export default Auth