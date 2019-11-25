import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap';

import { Container } from './styles';

export default class Cards extends Component {
  render() {
      
    return (
        <Container>
            <Jumbotron>
                <h1 className='display-8'>{this.props.title}</h1>
                <hr className='my-2' />
                <Button color='primary'>Create</Button>
                <Button color='primary'>View</Button>
                <Button color='primary'>Update</Button>
                <Button color='primary'>Delete</Button>
            </Jumbotron>
        </Container>
    );
  }
}
