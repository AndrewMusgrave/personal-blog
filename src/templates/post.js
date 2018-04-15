import React, {Component, Fragment} from 'react';
import axios from 'axios';
import {Heading, Container, TextContainer, Spinner, Comments, Footer} from '../components';

import '../styles/styles.scss';

export default class Template extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      comments: [],
      _id: null,
    };
  }

  componentDidMount() {
    const {identifier} = this.props.data.markdownRemark.frontmatter;
    this.setState({loading: true});
    axios.get(`https://programming-paradigms-api.herokuapp.com/api/comments/${identifier}`)
      .then((response) => {
        this.setState({comments: response.data.comments, loading: false, _id: response.data._id})
      })
      .catch((error) => console.log('Error grabbing comments : ', error))
  }

  handleSubmit = (name, comment) => {
    const {_id} = this.state;

    if (_id) {
      axios.post(`https://programming-paradigms-api.herokuapp.com/api/comment/`, {
        name,
        comment,
        _id,
      })
      .then(response => {
        const {comments} = this.state;
        comments.push(response.data);
        this.setState({comments})
      })
      .catch(err => console.log(err))
    };
  };

  render() {
    console.log(this.props.markdownRemark);
    const {markdownRemark = {}} = this.props.data;
    const {post} = markdownRemark;
    const {comments, loading} = this.state;
    const commentsMarkup = loading
      ? <Spinner />
      : <Comments onSubmit={this.handleSubmit}  comments={comments} />;

    return (
      <Fragment>
        <Container>
          <TextContainer>
            <Heading Element="h1" size="large" spacingTop>
              {post.frontmatter.title}
            </Heading>
            <div
              className="blog-post"
              dangerouslySetInnerHTML={{__html: post.html}}
            />
          </TextContainer>
          {commentsMarkup}
        </Container>
        <Footer />
      </Fragment>
    );
  }
}

// eslint-disable-next-line no-undef
export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        identifier
      }
    }
  }
`;
