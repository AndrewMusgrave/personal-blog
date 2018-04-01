import React from 'react';
import Helmet from 'react-helmet';
import ReactDisqusComments from 'react-disqus-comments'
import Container from '../components/Container'
import '../styles/styles.scss'


export default function Template({ data }) {
  //named markdownRemark post
  const { markdownRemark: post } = data;
  return (
    <Container>
      <h1>{post.frontmatter.title}</h1>
      <div className="blog-post" dangerouslySetInnerHTML={{ __html: post.html }} />
      <ReactDisqusComments
        shortname="example"
        identifier="something-unique-12345"
        title="Example Thread"
        url="http://www.example.com/example-thread"
        category_id="123456"
        onNewComment={() => {console.log('hmm')}}/>
    </Container>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } } ) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`