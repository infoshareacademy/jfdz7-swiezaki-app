import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Menu } from 'semantic-ui-react';
import { signOut } from '../../state/auth';

class Header extends Component {

    state = { activeItem: 'Wyszukiwarka' };

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
                       <Menu.Item name='Wyloguj' onClick={ this.props.signOut }/>
                   </Menu.Menu>
           </Menu>

       </Container>
            )
     }
}

export default connect(null, { signOut })(Header)