import React, {Fragment} from 'react';
import kebabCase from 'lodash/kebabCase';
import {Container, TextContainer, Heading, Tag, Link, Footer} from '../components';

import '../styles/styles.scss';

function TagsPage({
  data: {allMarkdownRemark: {group}},
}) {
  return (
    <Fragment>
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
      <Footer />
    </Fragment>
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
