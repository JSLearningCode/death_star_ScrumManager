import React, { Component } from 'react';
import { Button } from 'reactstrap';

import { Container } from './styles';
import Header from '../../components/Header/index';
import ProductDescription from '../../components/ProductDescription/index';
import ProductFunctionalities from '../../components/ProductFunctionalities/index';
import ProductAttachments from '../../components/ProductAttachments/index';

export default class ProductBacklog extends Component {
  render() {
    return (
      <Container>
        <Header text='Product Backlog' />
        <ProductDescription />
        <ProductFunctionalities />
        <ProductAttachments />
        <div id='btn-prod'>
          <Button color='warning'>EDIT</Button>
          <Button color='success'>SAVE</Button>
        </div>
      </Container>
    );
  }
}
