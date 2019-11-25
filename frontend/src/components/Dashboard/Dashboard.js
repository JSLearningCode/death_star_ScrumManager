import React, { Component } from 'react';

import { Container } from './styles';
import Cards from '../Cards/Cards';

// create jumbotron as component linked to get started, add users, add projects 
class Dashboard extends Component {
    render() {
        return(
            <Container>
                <Cards title='Users' />
                <Cards title='Sprints' />
                <Cards title='Projects' />
            </Container>
        );
    }
};

export default Dashboard;
