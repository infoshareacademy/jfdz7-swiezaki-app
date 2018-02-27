import React, { Component } from 'react'
import { BrowserRouter } from 'react-router-dom'


class Login extends Component {

    handleSubmit = () => {
        BrowserRouter.push('/search'); //TODO
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