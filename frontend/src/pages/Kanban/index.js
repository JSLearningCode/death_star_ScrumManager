import React, { Component } from 'react';

import { Container } from './styles';
import KanbanColumn from '../../components/KanbanColumn/index';

export default class Kanban extends Component {
  render() {
    return (
      <Container>
        <KanbanColumn title='TODO' />
        <KanbanColumn title='IN PROGRESS' />
        <KanbanColumn title='DONE' />
      </Container>
    );
  }
}
