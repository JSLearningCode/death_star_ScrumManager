import React, { Component } from 'react';

import { Container } from './styles';
import KanbanTasks from '../KanbanTasks/index';

export default class KanbanColumn extends Component {
  render() {
    return (
        <Container>
            <p>{this.props.title}</p>
            <KanbanTasks task='tarefa 1'></KanbanTasks>
            <KanbanTasks task='tarefa 2'></KanbanTasks>
            <KanbanTasks task='tarefa 3'></KanbanTasks>
        </Container>
    );
  }
}
