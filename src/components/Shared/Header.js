import React, { Component } from 'react';
import { withRouter } from 'react-router'
import { connect } from 'react-redux';
import { Container, Menu } from 'semantic-ui-react';
import { signOut } from '../../state/auth';

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
     console.log(this.props.favPartsIDs);

   return (
       <Container>

           <Menu pointing style={{"margin": "10px 0"}}>
               {/*<Link to={'/'}>*/}
               <Menu.Item
                   name='Wyszukiwarka'
                   active={ activeItem === 'Wyszukiwarka' }
                   onClick={ this.handleItemClick }
               />
               {/*</Link>*/}

               {/*<Link to={'/favourites'}>*/}
               <Menu.Item
                   link
                   name='Ulubione'
                   active={activeItem === 'Ulubione'}
                   onClick={ this.handleItemClick }
               />
               {/*</Link>*/}

                   <Menu.Menu position='right'>
                       <Menu.Item name='Wyloguj' onClick={ this.props.signOut }/>
                   </Menu.Menu>
           </Menu>

       </Container>
            )
     }
}

export default withRouter(connect(state => ({
    favPartsIDs: state.favourites.favPartsIDs,
}), { signOut })(Header));