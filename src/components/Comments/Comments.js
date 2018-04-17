import React, {Component} from 'react';
import {TextContainer, Heading, Comment, Divider} from '..';
import './Comments.scss';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      comment: '',
    };

    // this.measureRef = React.createRef();
  }

  componentDidMount() {
    if (!this.measureRef)
      return;

    const height = this.measureRef.offsetHeight;
    this.setState({height});
  }

  handleTextChange = (field) => {
    return (event) => {
      const text = event.target.value;
      const height = this.measureRef.offsetHeight;
      this.setState({[field]: text, height});
    };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const {name, comment} = this.state;
    const {onSubmit} = this.props;
    this.setState({name: '', comment: ''}, () => onSubmit(name, comment));
  };

  render() {
    const {name, comment, height} = this.state;
    const {comments, error} = this.props;
    const commentsMarkup = comments &&
      comments.map(
        (blogComment, index) =>(
          <Comment
            key={index}
            comment={blogComment.comment}
            name={blogComment.name}
            createdAt={blogComment.createdAt}
          />
        ));

    const errorMarkup = error && (
      <span className="text-error">{error}</span>
    )

    return (
      <div className="comments-wrapper">
        <Divider />
        <TextContainer>
          <Heading Element="h3" size="small" spacingBottom>
            Responses
          </Heading>
        </TextContainer>
        <form className="input-wrapper">
          <div className="input-wrapper">
            <input
              placeholder="Name"
              className="name-input"
              value={name}
              onChange={this.handleTextChange('name')}
            />
            <textarea
              style={{height: `${height}px`}}
              placeholder="Message"
              className="comment-section"
              value={comment}
              onChange={this.handleTextChange('comment')}
            />
            {errorMarkup}
            <div className="measure-textarea" ref={node => this.measureRef = node}>
              <div className="measure-div">
                <br />
                <br />
                <br />
                S
                {comment}
              </div>
            </div>
          </div>
          <button type="submit" onClick={this.handleSubmit} className="btn-submitt">Submit</button>
        </form>
        {commentsMarkup}
      </div>
    );
  }
}

export default Comments;
