import React from 'react';
import Helmet from 'react-helmet';
import {Container, Heading, TextContainer} from '../components';

function NotFoundPage() {
  return (
    <Container>
      <Helmet
        title="404 - Programming Paradigms"
        meta={[
          {name: 'description', content: "The page you were looking for could not be found."},
        ]}
      />
      <TextContainer>
        <Heading spacing>NOT FOUND</Heading>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </TextContainer>
    </Container>
  );
}

export default NotFoundPage;
