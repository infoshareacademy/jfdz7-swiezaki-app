import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import SignOutButton from '../Authorisation/SignOutButton';

class Header extends Component {

    state = { activeItem: 'Wyszukiwarka' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name });

 render() {

     const { activeItem } = this.state;

   return (
       <Container>

           <Menu pointing style={{"margin": "10px 0"}}>
               <Link to={'/'}>
               <Menu.Item
                   name='Wyszukiwarka'
                   active={activeItem === 'Wyszukiwarka'}
                   onClick={ this.handleItemClick }
               />
               </Link>

               <Link to={'/favourites'}>
               <Menu.Item
                   name='Ulubione'
                   active={activeItem === 'Ulubione'}
                   onClick={ this.handleItemClick }
               />
               </Link>
                   <Menu.Menu position='right'>
                       <Menu.Item name='Wyloguj' />
                   </Menu.Menu>
           </Menu>

           {/*<SignOutButton />*/}
               {/*/!*<Link to={`/`}>*!/*/}
                    {/*<Button onClick={ () => { document.location.href = "/"; }}>*/}
                   {/*Wyszukiwarka*/}
                    {/*</Button>*/}
               {/*/!*</Link>*!/*/}
                {/*<Button>*/}
                {/*<Link to={`/favourites`}>*/}
                    {/*Ulubione*/}
                {/*</Link>*/}
                {/*</Button>*/}

       </Container>
            )
     }
}

export default Header