import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Header extends Component {
 render() {
   return (
       <React.Fragment>
           <div>Header</div>
           <Link to={`/favourites`}>
               <button id="favsBtn">Ulubione części</button>
               <br/>
           </Link>
       </React.Fragment>
   )
     }
}

// Later we should add a function which will hide favsBtn if user is already in favs

export default Header