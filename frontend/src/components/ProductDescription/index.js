import React, { Component } from 'react';

import { Container } from './styles';
import { Label, Input } from 'reactstrap';


export default class ProductDescription extends Component {
  render() {
    return (
        <Container>
            <Label for='description'>Product Description</Label>
            <Input type='textarea' id='description' />
        </Container>
    );
  }
}
