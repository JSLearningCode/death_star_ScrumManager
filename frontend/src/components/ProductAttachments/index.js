import React, { Component } from 'react';

import { Container } from './styles';
import { Label, Input, FormText, Button } from 'reactstrap';

export default class ProductAttachments extends Component {
  render() {
    return (
        <Container>
            <Label for='archive'>Attachments</Label>
            <Input type='file' id='archive' />
            <FormText color='muted'>Attachments for the product backlog (pictures, blueprints, etc)</FormText>
            <Button color='primary'>UPLOAD</Button>
        </Container>
    );
  }
}
