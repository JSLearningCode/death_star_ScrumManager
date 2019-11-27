import React, { Component } from 'react';
import { Button, Jumbotron } from 'reactstrap';

import { Container } from './styles';

export default class Cards extends Component {
  render() {
      
    return (
        <Container>
            <Jumbotron>
                <h2 className='display-8'>{this.props.title}</h2>
                <hr className='my-2' />
                <div>
                  <Button color='primary'>Sprints</Button>
                  <Button color='primary'>Product Backlog</Button>
                </div>
                <div id='2'>
                  <Button color='primary'>Kanban</Button>
                  <Button color='primary'>Team</Button>
                </div>            
            </Jumbotron>
        </Container>
    );
  }
}
