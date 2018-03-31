import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Header, Divider, Grid, Icon, Tab } from 'semantic-ui-react';

import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

import '../../css/authorisation.css'


const panes= [
    { menuItem: 'Logowanie', render: () => <Tab.Pane><SignInForm /></Tab.Pane>},
    { menuItem: 'Rejestracja', render: () => <Tab.Pane><SignUpForm /></Tab.Pane>}
    ];


class Auth extends Component {
    render() {
        return this.props.user === null ? (

            <Grid container columns={3} centered={4} className='col-centered'>
                <Header as="h2" textAlign='center'>
                    <Header.Content>
                    Wyszukiwarka części samochodowych
                </Header.Content>
                </Header>
                <Grid.Row className='row-centered'>
                <Grid.Column>
                    <Tab panes={panes} defaultActiveIndex={0} />
                    <Divider horizontal>lub</Divider>
                    <Button fluid color='facebook'>
                        <Icon name='facebook' /> Kontynuuj z Facebook
                    </Button>

                </Grid.Column>
                </Grid.Row>
            </Grid>
        ) : ( this.props.children )
    }
}

export default connect(state => ({
    user: state.auth.user
}))(Auth)