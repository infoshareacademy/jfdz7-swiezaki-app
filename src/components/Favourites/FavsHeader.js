import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';

class FavsHeader extends Component {

    render() {

        return (
            <React.Fragment>
                <Header as="h2" icon textAlign="center">
                    <Icon name="like" circular color="red" />
                    <Header.Content>
                        Ulubione
                    </Header.Content>
                    <Header.Subheader>
                        Tutaj wyświetlają się części, które obserwujesz.
                    </Header.Subheader>
                </Header>
            </React.Fragment>
        )
    };

}

export default FavsHeader