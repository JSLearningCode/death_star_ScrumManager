import React, { Component } from 'react';

import { Container } from './styles';
import Header from '../../components/Header/index';

export default class ProductBacklog extends Component {
  render() {
    return (
      <Container>
        <Header text='Product Backlog' />
      </Container>
    );
  }
}
