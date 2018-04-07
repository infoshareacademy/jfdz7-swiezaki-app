import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { Container, Menu } from 'semantic-ui-react';
import { signOut } from '../../state/auth';

import '../../css/header.css';

class Header extends Component {

    state = { activeItem: 'Wyszukiwarka' };

    handleItemClick = (e, { name }) => {

        this.setState({ activeItem: name });

        name === 'Ulubione' ?
            this.props.history.push('/favourites') :
            this.props.history.push('/')
    };


 render() {

     const { activeItem } = this.state;
     const email  = this.props.user.email;
     const user = email.split("@")[0];

   return (
       <Container>

           <Menu
               pointing
               inverted
               className="content-margin"
           >

               <Menu.Item
                   name='Wyszukiwarka'
                   active={ activeItem === 'Wyszukiwarka' }
                   onClick={ this.handleItemClick }
               />

               <Menu.Item
                   link
                   name='Ulubione'
                   active={activeItem === 'Ulubione'}
                   onClick={ this.handleItemClick }
               >
                   Ulubione ({ this.props.favPartsIDs.length })
               </Menu.Item>

                   <Menu.Menu position='right'>
                       <Menu.Item name='Wyloguj' onClick={ this.props.signOut } />
                   </Menu.Menu>
           </Menu>
           <div
               className="login-message">Zalogowany:
               {' '
                    + user.charAt(0).toUpperCase()
                    + user.substr(1)
               }
           </div>
       </Container>
            )
     }
}

export default withRouter(connect(state => ({
    favPartsIDs: state.favourites.favPartsIDs,
    user: state.auth.user
}), { signOut })(Header));