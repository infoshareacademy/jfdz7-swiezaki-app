import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Header from './Shared/Header'
import Search from './Search'
import Footer from './Shared/Footer'
import Login from './Login'
import Product from './Product'
import Register from './Register'
import Favourites from './Favourites'

class App extends Component {

    render (){
        return (
            <BrowserRouter>
            <React.Fragment>
                <Header/>
                <Route path="/" exact component={Login}/>
                <Route path="/search" exact component={Search}/>
                <Route path="/search/:id" component={Product}/>
                <Route path="/register" component={Register}/>
                <Route path="/favourites" component={Favourites}/>
                <Footer/>
            </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App