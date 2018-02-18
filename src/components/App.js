import React, { Component } from 'react'

import Header from '../shared/Header'
import Search from '../shared/Search'
import Footer from '../shared/Footer'



class App extends Component {
    render (){
        return (
            <React.Fragment>
                <Header/>
                <Search/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default App