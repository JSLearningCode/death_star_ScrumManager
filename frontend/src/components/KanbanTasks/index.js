import React, { Component } from 'react';

import { Container } from './styles';

export default class KanbanTasks extends Component {
  render() {
    return (
        <Container>
          <p>{this.props.task}</p>
        </Container>
    );
  }
}
