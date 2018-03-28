import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Tab, Grid } from 'semantic-ui-react';

import SignUpForm from './SignUpForm'
import SignInForm from './SignInForm'

const panes= [
    { menuItem: 'Logowanie', render: () => <Tab.Pane><SignInForm /></Tab.Pane>},
    { menuItem: 'Rejestracja', render: () => <Tab.Pane><SignUpForm /></Tab.Pane>}
    ];


class Auth extends Component {
    render() {
        return this.props.user === null ? (
            <Grid centered columns={4}>
                <Grid.Column>
           <Tab panes={panes} defaultActiveIndex={0} />
                </Grid.Column>
            </Grid>
        ) : ( this.props.children )
    }
}

export default connect(state => ({
    user: state.auth.user
}))(Auth)