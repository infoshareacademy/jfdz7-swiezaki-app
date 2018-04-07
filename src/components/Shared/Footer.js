import React, { Component } from 'react';
import { Container, Segment } from 'semantic-ui-react';
import '../../css/footer.css';


class Footer extends Component {
    render() {
        return (
            <Container>
                <Segment inverted textAlign='center' className="content-margin">
                Copyright &copy; 2018 by Świeżaki DevTeam. All Rights Reserved.
                </Segment>
            </Container>
        )

    }
}

export default Footer