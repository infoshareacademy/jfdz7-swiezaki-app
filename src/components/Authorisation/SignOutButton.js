import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';

import { signOut } from '../../state/auth';

class SignOutButton extends Component {
    render() {
        return <Icon name='sign out' size='large' onClick={() => this.props.signOut()}>Wyloguj...</Icon>
    }
}

export default connect(null, { signOut })(SignOutButton)