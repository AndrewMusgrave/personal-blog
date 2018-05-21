import React from 'react';
import Helmet from 'react-helmet';
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
      <Helmet
        title={`${tag} tag - Programming Paradigms`}
        meta={[
          {name: 'description', content: `All blog posts associated with ${tag}`},
        ]}
      />
      <TextContainer>
        <Heading spacing Element="h1" size="large">
          {tagHeader}
        </Heading>
      </TextContainer>
      <PostList items={edges} />
      <Button>
        <Link aria-label="all tags" to="/tags">All tags</Link>
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
            date(formatString: "MMMM DD, YYYY")
            tags
            author
          }
        }
      }
    }
  }
`;
