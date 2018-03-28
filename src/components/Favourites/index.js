import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Divider, Icon } from 'semantic-ui-react';

import FavsHeader from './FavsHeader';
import FavsList from './FavsList';
import FavsMessage from './FavsMessage';

class Favourites extends Component {

    render() {

        return (
            <Container>
                <FavsHeader/>
                <Divider/>
                <FavsMessage/>
                <FavsList/>
                <Divider/>
                <div className="returnToSearchBtn">
                    <Link to={`/`}>
                        <Button primary size="huge">
                            <Icon name="reply" />
                            Wróć do wyszukiwarki
                        </Button>
                    </Link>
                </div>
            </Container>
        )
    };

}

export default Favourites