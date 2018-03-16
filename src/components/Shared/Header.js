import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Header extends Component {
 render() {
   return (
       <React.Fragment>
           <menu>
               <Link to={`/search`}>
                   [ Wyszukiwarka ]
               </Link>
                &nbsp;
                <Link to={`/favourites`}>
                    [ Ulubione ]
                </Link>

           </menu>
       </React.Fragment>
   )
     }
}

// Later we should add a function which will hide favsBtn if user is already in favs

export default Header