import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Login extends Component {

    handleSubmit = () => {
        this.props.history.push('/search');
    };

    render() {
        return (
            <React.Fragment>
                <input type="name"/><br/>
                <input type="password"/><br/>
                <button onClick={this.handleSubmit}>Zaloguj</button>
                <input type="checkbox"/><label>Zapamiętaj mnie</label>
                <p>Nie masz jeszcze konta? <Link to="/register/">Zarejestruj się!</Link></p>
            </React.Fragment>
        )
    }
}

export default Login
