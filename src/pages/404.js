import React from 'react';
import {Container, Heading, TextContainer} from '../components';

function NotFoundPage() {
  return (
    <Container>
      <TextContainer>
        <Heading spacing>NOT FOUND</Heading>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </TextContainer>
    </Container>
  );
}

export default NotFoundPage;
