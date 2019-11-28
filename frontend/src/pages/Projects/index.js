import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { Container } from './styles';

import ProjectLine from '../../components/ProjectLine/index';

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <div id='headerbtn'>
          <Button 
            color='primary'
            size='lg'
          >
            New
          </Button>
          <Button 
            color='warning'
            size='lg'
          >
            Edit
          </Button>
          <Button
            color='danger'
            size='lg'
          >
            Delete
          </Button>
        </div>
        <div id='linespj'>
          <ProjectLine title='projetoX'></ProjectLine>
          <ProjectLine title='projetoY'></ProjectLine>
          <ProjectLine title='projetoZ'></ProjectLine>
        </div>
      </Container>
    );
  }
}
