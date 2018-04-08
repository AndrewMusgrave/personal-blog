import React from 'react';
import kebabCase from 'lodash/kebabCase';
import {Container, TextContainer, Heading, Tag, Link} from '../components';

import '../styles/styles.scss';

function TagsPage({
  data: {allMarkdownRemark: {group}},
}) {
  return (
    <Container>
      <TextContainer>
        <Heading spacing Element="h1" size="large">
          Tags.
        </Heading>
      </TextContainer>
      <ul className="tag-list">
        {group.map(tag => (
          <li key={tag.fieldValue}>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              <Tag>{tag.fieldValue}</Tag>
            </Link>
            ({tag.totalCount})
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default TagsPage;

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
