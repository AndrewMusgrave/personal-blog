import React from 'react'
import './Tag.scss'

const Tag = ({children}) => {
  return (
    <span className="tag">
      {children}
    </span>
  )
}

export default Tag