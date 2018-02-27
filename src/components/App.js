import React, { Component } from 'react'
import { Route, BrowserRouter} from 'react-router-dom'

import Header from './shared/Header'
import Footer from './shared/Footer'
import Login from './Login'
import Search from './Search'




class App extends Component {
    render (){
        return (
            <BrowserRouter>
            <React.Fragment>
                <Header/>
                <Route path="/" exact component={Login}/>
                <Route path="/search" component={Search}/>
                <Footer/>
            </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App