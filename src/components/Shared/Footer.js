import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';


class Footer extends Component {
    render() {
        return (
            <Container>
                <Segment inverted textAlign='center' style={{ "margin": "10px 0px" }}>
                Copyright &copy; 2018 by Świeżaki DevTeam. All Rights Reserved.
                </Segment>
            </Container>
        )

    }
}

export default Footer