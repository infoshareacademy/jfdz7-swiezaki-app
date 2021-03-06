import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import Header from './Shared/Header'
import Search from './Search'
import Footer from './Shared/Footer'
import Favourites from './Favourites'

class App extends Component {

    render (){
        return (
            <React.Fragment>
                <Header/>
                <Route exact path="/" component={Search}/>
                <Route path="/favourites" component={Favourites}/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default withRouter(App)