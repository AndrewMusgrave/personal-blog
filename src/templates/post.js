import React, {Component} from 'react';
import Helmet from 'react-helmet';
import axios from 'axios';
import {Heading, Container, TextContainer, Spinner, Comments, Footer} from '../components';

import '../styles/styles.scss';

export default class Template extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      comments: [],
      _id: null,
      error: '',
    };
  }

  componentDidMount() {
    const {identifier} = this.props.data.markdownRemark.frontmatter;
    axios.get(`https://programming-paradigms-api.herokuapp.com/api/comments/${identifier}`)
      .then((response) => {
        this.setState({comments: response.data.comments, loading: false, _id: response.data._id});
      })
      .catch((error) => console.log('Error grabbing comments : ', error))
  }

  handleSubmit = (name, comment) => {
    const {_id} = this.state;

    if (_id) {
      if (comment) {
        axios.post(`https://programming-paradigms-api.herokuapp.com/api/comment/`, {
          name,
          comment,
          _id,
        })
        .then(response => {
          const {comments} = this.state;
          comments.unshift(response.data);
          this.setState({comments, error: ''});
        })
        .catch(err => this.setState({error: 'An error has occured posting your comment.'}));
        return;
      }
      this.setState({error: 'Please enter a comment and submit again, thank you.'});
    };
  };

  render() {
    const {markdownRemark: post} = this.props.data;
    const {comments, loading, error} = this.state;
    const commentsMarkup = loading
      ? <Spinner />
      : <Comments onSubmit={this.handleSubmit}  comments={comments} error={error} />;

    const imageMarkup = post.frontmatter.image && (
      <img
        src={post.frontmatter.image}
        alt="post header"
        className="post-image"
      />
    );

    return (
      <div className="post-wrapper">
        <Helmet
          title={`${post.frontmatter.title} - Programming Paradigms`}
          meta={[
            {name: 'description', content: post.excerpt},
          ]}
        />
        <Container>
          <Heading Element="h1" size="large" spacingTop>
            {post.frontmatter.title}
          </Heading>
        </Container>
        {imageMarkup}
        <Container>
          <TextContainer>
            <div
              className="blog-post"
              dangerouslySetInnerHTML={{__html: post.html}}
            />
          </TextContainer>
          {commentsMarkup}
        </Container>
        <Footer />
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt
      frontmatter {
        path
        title
        identifier
        image
      }
    }
  }
`;
