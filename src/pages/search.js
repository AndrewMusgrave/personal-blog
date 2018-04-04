import React, {Component} from 'react'
import Link from 'gatsby-link'
import Container from '../components/Container'
import Card from '../components/Card'
import Heading from '../components/Heading'
import '../styles/styles.scss';
import TextContainer from '../components/TextContainer';
import TextSearch from '../components/TextSearch';

const WAIT_INTERVAL = 1000;
const ENTER_KEY = 13;

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    }
  }

  // componentWillMount() {
  //   this.timer = null;
  // }

  handleSearch = (e) => {
    // clearTimeout(this.timer);
    // this.setState({searchTerm: e.target.value});
    // this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
    console.log(e.target.value)
  }

  // triggerChange = () => {
  //   const {searchTerm} = this.state;

  //   this.props.onChange(value);
  // }

  render() {
    const {searchTerm} = this.state;
    const {data} = this.props;
    const posts = data.allMarkdownRemark.edges;
    const postMarkup = posts && (
      posts.map((post, ind) => (
          <li key={ind}>
            <Card
              excerpt={post.node.excerpt}
              {...post.node.frontmatter}
            />
          </li>
        )
      )
    )

    return (
      <Container>
        <div className="card-intro">
          <TextContainer>
            <Heading Element="h1" size="large">
              andrew musgrave.
            </Heading>
            <TextSearch
              type="text"
              value={searchTerm}
              onChange={this.handleSearch}
            />
          </TextContainer>
        </div>
        <ul className="post-list">
          {postMarkup}
        </ul>
      </Container>
    )
  }
}

export const pageQuery = graphql`
  query searchPageQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: ASC }
      filter: {  frontmatter: { published: { eq: true } } }
      ) {
      edges {
        node {
          html
          frontmatter {
            minutes
            title
            path
            date(formatString: "DD MMMM, YYYY")
            tags
          }
        }
      }
    }
  }
`

export default SearchPage

// go through all posts adding together keywords and tags
// elim dups
// sort