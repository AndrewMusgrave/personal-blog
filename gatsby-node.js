const path = require('path');
const axios = require('axios');
const _ = require('lodash');

exports.createPages = ({boundActionCreators, graphql}) => {
  const {createPage} = boundActionCreators;

  const postTemplate = path.resolve('src/templates/post.js');
  const tagTemplate = path.resolve("src/templates/tags.js");

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 2000
    ) {
      edges {
        node {
          html
          id
          frontmatter {
            path
            identifier
            title
            date
            tags
          }
        }
      }
    }
  }`)
  .then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }


    const posts = res.data.allMarkdownRemark.edges;

    posts.forEach(async ({node}) => {
      await axios.post(`https://programming-paradigms-api.herokuapp.com/api/post/`, {
          title: node.frontmatter.title,
          identifier: node.frontmatter.identifier,
      }).catch(err => console.log(`Unable to create post comment section: ${err}`));
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
      });
    });

    let tags = [];
    _.each(posts, edge => {
      if (_.get(edge, "node.frontmatter.tags")) {
        tags = tags.concat(edge.node.frontmatter.tags);
      }
    });

    tags = [...new Set(tags)];

    tags.forEach(tag => {
      createPage({
        path: `/tags/${_.kebabCase(tag)}/`,
        component: tagTemplate,
        context: {
          tag,
        },
      });
    });
  });
};