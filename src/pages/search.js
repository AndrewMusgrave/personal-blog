import React, {Component} from 'react';
import Helmet from 'react-helmet';
import {Container, Card, Heading, TextContainer, TextInput} from '../components';

import '../styles/styles.scss';

const WAIT_INTERVAL = 500;
const ENTER_KEY = 13;

class SearchPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: '',
    };
  }

  componentWillMount() {
    this.timer = null;
  }

  handleSearch = e => {
    clearTimeout(this.timer);
    this.setState({searchTerm: e.target.value});
    this.timer = setTimeout(this.triggerChange, WAIT_INTERVAL);
  };

  triggerChange = () => {
    this.fullTextSearch();
  };

  handleKeyDown = e => {
    if (e.keyCode === ENTER_KEY) {
      this.fullTextSearch();
    }
  };

  fullTextSearch = () => {
    const {searchTerm} = this.state;
    const {edges} = this.props.data.allMarkdownRemark;
    const results = [];
    for (let i = 0; i < edges.length; i++) {
      const text = edges[i].node.html + edges[i].node.frontmatter.title;
      const count = searchAllOccurances(text, searchTerm);
      if (count > 0) {
        edges[i].node.count = count;
        results.push(edges[i].node);
      }
    }
    const articles = results.sort((a, b) => b.count - a.count);
    this.setState({articles});
  };

  render() {
    const {searchTerm} = this.state;
    const {articles} = this.state;

    const postMarkup =
      articles &&
      articles.map((post, ind) => (
        <li key={ind}>
          <Card excerpt={post.excerpt} {...post.frontmatter} />
        </li>
      ));

    return (
        // <div style={{height: '100%'}}>
      <Container>
        <Helmet
          title="Search - Programming Paradigms"
          meta={[
            {name: 'description', content: "Search the programming paradigm blog articles"},
          ]}
        />
        <TextContainer>
          <Heading Element="h1" size="large" spacing>
            search my blog.
          </Heading>
          <TextInput
            value={searchTerm}
            onChange={this.handleSearch}
            onKeyDown={this.handleKeyDown}
            placeholder="React..."
          />
        </TextContainer>
        <ul className="post-list">{postMarkup}</ul>
      </Container>
        // </div>
    );
  }
}

function countOccurances(text, searchWord) {
  let count = 0;
  let i;
  for (i = 0; i < text.length; i++) if (text[i] === searchWord) count++;
  return count;
}

function searchAllOccurances(html, keywords) {
  const text = removeHTML(html)
    .toLowerCase()
    .split(/\s+/);
  const keywordArr = keywords.toLowerCase().split(' ');
  let count = 0;
  let i;
  for (i = 0; i < keywordArr.length; i++)
    count += countOccurances(text, keywordArr[i]);
  return count;
}

function removeHTML(html) {
  return html.replace(/<\/?[^>]+(>|$)|[().,:;?!]/g, '');
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query searchPageQuery {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: ASC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      edges {
        node {
          html
          excerpt
          frontmatter {
            minutes
            title
            path
            author
            date(formatString: "MMMM DD, YYYY")
            tags
          }
        }
      }
    }
  }
`;

export default SearchPage;
