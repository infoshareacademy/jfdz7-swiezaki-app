import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Header from './shared/Header'
import Search from './Search'
import Footer from './shared/Footer'
import Auth from './Auth'
import Product from './Product'
import Favourites from './Favourites'




class App extends Component {
    render (){
        return (
            <BrowserRouter>
            <React.Fragment>
                <Header/>
                <Route path="/" exact component={Auth}/>
                <Route path="/search" exact component={Search}/>
                <Route path="/search/:id" component={Product}/>
                <Route path="/favourites" component={Favourites}/>
                <Footer/>
            </React.Fragment>
            </BrowserRouter>
        )
    }
}

export default App