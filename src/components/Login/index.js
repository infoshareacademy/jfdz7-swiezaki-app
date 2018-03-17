import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import FacebookAuth from './FacebookAuth'


class Login extends Component {
    state = {
        username: null
    };

    onFacebookLogin = (loginStatus, resultObject) => {
        loginStatus
            ?
            this.setState({username:resultObject.user.name})
            :
            alert('Błąd logowania')
    }

       handleSubmit = () => {
        this.props.history.push('/search');
    };

    render() {
        const { username } = this.state;
        return (
            <React.Fragment>
                <label>Adres e-mail</label><br/><input type="email"/><br/>
                <label>Hasło</label><br/><input type="password"/><br/>
                <button onClick={this.handleSubmit}>Zaloguj</button>
                <input type="checkbox"/><label>Zapamiętaj mnie</label>
                <p>Nie masz jeszcze konta? <Link to="/register/">Zarejestruj się!</Link></p>
                <div>
                    { !username &&
                    <div>
                        <FacebookAuth onLogin={this.onFacebookLogin}>
                            <div className="fb-login-button"
                                 data-max-rows="1"
                                 data-size="medium"
                                 data-button-type="login_with"
                                 data-show-faces="false"
                                 data-auto-logout-link="false"
                                 data-use-continue-as="false"> </div>
                        </FacebookAuth>
                    </div>
                    }
                    {username &&
                    <p>Witaj {username}</p>
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default Login
