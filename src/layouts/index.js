import React from 'react';
import Helmet from 'react-helmet';
import { Nav } from '../components';
// require("prismjs/themes/prism-twilight.css");
import './Theme.scss';
import './index.scss';

const TemplateWrapper = ({ children, data }) => (
  <div id="template-wrapper">
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Nav
      recentArticle={data.allMarkdownRemark.edges[0].node.frontmatter.path}
    />
    {children()}
  </div>
);

export default TemplateWrapper;

export const postQuery = graphql`
  query templatePageQuery {
    allMarkdownRemark(
      limit: 1
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          frontmatter {
            path
          }
        }
      }
    }
  }
`;
