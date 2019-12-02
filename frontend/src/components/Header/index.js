import React, { Component } from 'react';

import { Container } from './styles';

export default class Header extends Component {
  render() {
    return (
        <Container>
            <h2 className='display-8'> {this.props.text} </h2>
            <hr className='my-2' />
        </Container>
    );
  }
}
