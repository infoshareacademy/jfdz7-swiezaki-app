import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'

import Header from './Shared/Header'
import Search from './Search'
import Footer from './Shared/Footer'
import Product from './Product'
import Favourites from './Favourites'
import SignOutButton from '../components/Authorisation/SignOutButton'

class App extends Component {

    render (){
        return (
            <React.Fragment>
                <Header/>
                <p>
                    <SignOutButton />
                </p>
                <Route exact path="/" component={Search}/>
                <Route path="/:id" component={Product}/>
                <Route path="/favourites" component={Favourites}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default withRouter(App)