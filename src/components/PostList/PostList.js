import React from 'react'
import Card from '../Card'
import './PostList.scss'

const PostList = ({items}) => {
  const listMarkup = items && (
    items.map((item, ind) => (
      <li key={ind}>
        <Card
          excerpt={item.node.excerpt}
          {...item.node.frontmatter}
        />
      </li>
    ))
  )



  return (
    <ul className="post-list">
      {listMarkup}
    </ul>
  )
}

export default PostList