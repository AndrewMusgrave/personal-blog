import React from 'react';
import './Comment.scss';
import {Heading, TextContainer} from '..'

function Comment({comment, name, createdAt}) {
  const date = new Date(createdAt).toLocaleDateString("en-US", {day: '2-digit', month: 'short', year: 'numeric'})
  return (
    <TextContainer>
      <div className="blog-comment">
        <Heading size="extra-small" Element="h4" spacingNone>
          {name}
        </Heading>
        <div>
          {comment}
        </div>
        <div className="comment-date">
          {date}
        </div>
      </div>
    </TextContainer>
  );
}

export default Comment;
