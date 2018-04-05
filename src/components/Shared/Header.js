import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import SignOutButton from '../Authorisation/SignOutButton';

class Header extends Component {
 render() {
   return (
       <Container>

           <SignOutButton />
           <menu>
               <Link to={`/`}>
                   [ Wyszukiwarka ]
               </Link>
                &nbsp;
                <Link to={`/favourites`}>
                    [ Ulubione ]
                </Link>
           </menu>

       </Container>
            )
     }
}

export default Header