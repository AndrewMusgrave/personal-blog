import React from 'react'
import './Card.scss'
import Link from '../Link';

import Icon from '../Icon'
import Tag from '../Tag'
import Heading from '../Heading'
import TextContainer from '../TextContainer'

const Card = ({
  author,
  avatar,
  excerpt,//
  path,//
  minutes,
  tags,
  title,//
  date,
}) => {
  const headingMarkup = title && path && excerpt && (
    <Link
    to={path}
    >
      <Heading>
          {title}
      </Heading>
      <div className="excerpt">
        {excerpt}
      </div>
    </Link>
  )

  const tagMarkup = tags && (
    tags.map((tag, ind) => (
      <Link to={`/tags/${tag}`}>
        <Tag key={ind}>
          {tag}
        </Tag>
      </Link>
    ))
  )

  const personal = author && minutes && date && (
    <div className="card-personal">
      <div>
        <div>
          {author}
        </div>
        <div className="card-details">
          <span>{date}</span>
          <span className="card-dot">●</span>
          <span>{minutes} minute read</span>
        </div>
      </div>
      <div className="tag-container">
        {tagMarkup}
      </div>
    </div>
  )

  return (
    <TextContainer>
      <article>
        {headingMarkup}
        {personal}
      </article>
    </TextContainer>
  )
}

export default Card