import React from "react";
import PropTypes from "prop-types";

import kebabCase from "lodash/kebabCase";
import Container from '../components/Container'
import TextContainer from '../components/TextContainer'
import Heading from '../components/Heading';
import Tag from '../components/Tag'
import Link from "gatsby-link";
import '../styles/styles.scss';

const TagsPage = ({
  data: { allMarkdownRemark: { group }, site: { siteMetadata: { title } } },
}) => (
  <Container>
    <TextContainer>
      <Heading spacing Element="h1" size="large">
        Tags.
      </Heading>
    </TextContainer>
      <ul className="tag-list">
        {group.map(tag => (
          <li key={tag.fieldValue}>
              <Link style={{color: 'inherit', textDecoration: 'none'}} to={`/tags/${kebabCase(tag.fieldValue)}/`}>
            <Tag>
                {tag.fieldValue}
            </Tag>
              </Link>
            ({tag.totalCount})
          </li>
        ))}
      </ul>
  </Container>
);


export default TagsPage;

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