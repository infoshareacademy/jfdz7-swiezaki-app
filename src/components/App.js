import React, { Component } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Header from './Shared/Header'
import Search from './Search'
import Footer from './Shared/Footer'
import Auth from './Authorisation/Auth'
import Product from './Product'
import Favourites from './Favourites'
import SignOutButton from '../components/Authorisation/SignOutButton'

class App extends Component {

    render (){
        return (
            <BrowserRouter>
            <React.Fragment>
                <Header/>
                <p>
                    <SignOutButton />
                </p>
                <Route exact path="/" component={Auth}/>
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