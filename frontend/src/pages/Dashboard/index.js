import React, { Component } from 'react';

import { Container } from './styles';
import Cards from '../../components/Cards/index';

// create jumbotron as component linked to get started, add users, add projects 
class Dashboard extends Component {
    render() {
        return(
            <Container>
                <Cards title='ProjectX' />
                <Cards title='ProjectY' />
                <Cards title='ProjectZ' />
            </Container>
        );
    }
};

export default Dashboard;
