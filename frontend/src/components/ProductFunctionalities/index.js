import React, { Component } from 'react';

import { Label, ListGroup, ListGroupItem } from 'reactstrap';

import { Container } from './styles';

export default class ProductFunctionalities extends Component {
  render() {
    return (
        <Container>
            <Label for='func'>Functionalities</Label>
            <ListGroup id='func'>
              <ListGroupItem action>Do this</ListGroupItem>
              <ListGroupItem action>Do that</ListGroupItem>
              <ListGroupItem action>Change this</ListGroupItem>
            </ListGroup>
        </Container>
    );
  }
}
