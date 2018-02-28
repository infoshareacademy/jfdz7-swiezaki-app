import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Header from './shared/Header'
import Search from './Search'
import Footer from './shared/Footer'
import Login from './Login'
import Product from './Product'



class App extends Component {
    render (){
        return (
            <BrowserRouter>
            <React.Fragment>
                <Header/>
                <Route path="/" exact component={Login}/>
                <Route path="/search" exact component={Search}/>
                <Route path="/search/:id" component={Product}/>
                <Footer/>
            </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App