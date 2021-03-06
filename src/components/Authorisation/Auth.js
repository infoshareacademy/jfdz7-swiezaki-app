import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Container, Header, Divider, Grid, Icon, Tab } from 'semantic-ui-react';

import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'
import {authWithFacebook} from '../../state/auth';


import '../../css/authorisation.css'


const panes= [
    { menuItem: 'Logowanie', render: () => <Tab.Pane><SignInForm /></Tab.Pane>},
    { menuItem: 'Rejestracja', render: () => <Tab.Pane><SignUpForm /></Tab.Pane>}
    ];


class Auth extends Component {
    render() {
        return this.props.user === null ? (
            <Container fluid className='auth-container'>
            <Grid container columns={1} centered className='col-centered'>
                <Header as="h2" textAlign='center'>
                    <Header.Content>
                    Wyszukiwarka części samochodowych
                </Header.Content>
                    <Header.Subheader>
                        Pomożemy Ci znaleźć każdą część do Twojego samochodu
                    </Header.Subheader>
                </Header>
                <Grid.Row className='row-centered'>
                <Grid.Column>
                    <Tab panes={panes} defaultActiveIndex={0} />
                    <Divider horizontal>lub</Divider>
                    <Button fluid color='facebook' onClick={this.props.authWithFacebook}>
                        <Icon name='facebook' /> Kontynuuj z Facebook
                    </Button>

                </Grid.Column>
                </Grid.Row>
            </Grid>
            </Container>
        ) : ( this.props.children )
    }
}

export default connect(state => ({
    user: state.auth.user
}), { authWithFacebook })(Auth)