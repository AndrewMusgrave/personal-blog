import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import Card from '../components/Card'
import Heading from '../components/Heading'
import PostList from '../components/PostList'
import '../styles/styles.scss';
import TextContainer from '../components/TextContainer/TextContainer';


const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  // const postMarkup = posts && (
  //   posts.map((post, ind) => (
  //       <li key={ind}>
  //         <Card
  //           excerpt={post.node.excerpt}
  //           {...post.node.frontmatter}
  //         />
  //       </li>
  //     )
  //   )
  // )

  return (
    <Container>
      <div className="card-intro">
      <img style={{minHeight: '200px', minWidth: '200px'}} src="https://farm5.staticflickr.com/4438/36177469644_0c7cf43939_o.jpg" width="200" height="200" />
        <TextContainer>
          <Heading Element="h1" size="large">
            Andrew Musgrave.
          </Heading>
          <p>hello, i'm a developer in ottawa ontario. working at shopify on their design system; polaris. if you’re interested in my blog you’ll see posts ranging from, computer science to front-end as well as the odd opinion based post.</p>
        </TextContainer>
      </div>
      {/* <ul className="post-list">
        {postMarkup}
      </ul> */}
      <PostList
        items={posts}
      />
    </Container>
  )
}

export const pageQuery = graphql`
  query indexPageQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {  frontmatter: { published: { eq: true } } }
      ) {
      edges {
        node {
          excerpt
          frontmatter {
            minutes
            title
            path
            date(formatString: "DD MMMM, YYYY")
            tags
            author
            avatar
          }
        }
      }
    }
  }
`

export default IndexPage
