import React from 'react';
import {
  Link,
  Container,
  TextContainer,
  Heading,
  PostList,
  Button,
} from '../components';

function Tags({pathContext, data}) {
  const {tag} = pathContext;
  const {edges, totalCount} = data.allMarkdownRemark;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
  } tagged with "${tag}"`;
  return (
    <Container>
      <TextContainer>
        <Heading spacing Element="h1" size="large">
          {tagHeader}
        </Heading>
      </TextContainer>
      <PostList items={edges} />
      <Button>
        <Link to="/tags">All tags</Link>
      </Button>
    </Container>
  );
};

export default Tags;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query TagPage($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          excerpt
          frontmatter {
            title
            path
            minutes
            date(formatString: "DD MMMM, YYYY")
            tags
            author
            avatar
          }
        }
      }
    }
  }
`;
