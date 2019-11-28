import React, { Component } from 'react';

import { Container } from './styles';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';


export default class ProjectLine extends Component {
  render() {
    return (
        <Container>
            <Form>
                <FormGroup check inline>
                    <Label check>
                        <Input type='checkbox' /><span id='title'>{this.props.title}</span>
                        <span id='buttons'>    
                            <Button color='info'>Change Current</Button>
                            <Button color='success'>Sprints</Button>
                            <Button color='primary'>Kanban</Button>
                        </span>  
                        <hr className='my-2' />  
                    </Label>
                </FormGroup>
            </Form>
        </Container>
    );
  }
}
