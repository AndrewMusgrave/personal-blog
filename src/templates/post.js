import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import {Heading, Container, TextContainer} from '../components';

import '../styles/styles.scss';

export default function Template({data}) {
  const {markdownRemark: post} = data;
  return (
    <Container>
      <TextContainer>
        <Heading Element="h1" size="large" spacingTop>
          {post.frontmatter.title}
        </Heading>
        <div
          className="blog-post"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </TextContainer>
      {/* <ReactDisqusComments
        shortname="example"
        identifier="something-unique-12345"
        title="Example Thread"
        url="http://www.example.com/example-thread12311421412313"
        category_id="2343241231"
        onNewComment={() => {console.log('hmm')}}/> */}
    </Container>
  );
}

// eslint-disable-next-line no-undef
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
