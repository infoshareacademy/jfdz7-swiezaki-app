import React, { Component } from 'react'

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
            </React.Fragment>
        )
    }
}

export default Login
