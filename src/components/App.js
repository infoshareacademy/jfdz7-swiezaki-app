import React, { Component } from 'react'

import Header from './shared/Header'
import Search from './shared/Search'
import Footer from './shared/Footer'
import Login from './Login'



class App extends Component {
    render (){
        return (
            <React.Fragment>
                <Header/>
                <Login/>
                <Search/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default App