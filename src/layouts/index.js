import React from 'react';
import Helmet from 'react-helmet';
import {Nav} from '../components';
// require("prismjs/themes/prism-twilight.css");
import './Theme.scss';
import './index.scss';

function TemplateWrapper({children, data}) {
  return (
    <div id="template-wrapper">
      <Helmet
        title="Programming Paradigms"
        meta={[
          {name: 'description', content: "Hello, I'm a developer in Ottawa Ontario, working at shopify on their design system: polaris. If you’re interested in my blog you’ll see posts ranging from computer science to front-end, as well as the odd opinion based post."},
        ]}
        defer
        link={[{rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Expletus+Sans'}, {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Josefin+Sans:300'}]}
      >
        <html lang="en" />
      </Helmet>
      <Nav
        recentArticle={data.allMarkdownRemark.edges[0].node.frontmatter.path}
      />
      {children()}
    </div>
  );
}

export default TemplateWrapper;

// eslint-disable-next-line no-undef
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
