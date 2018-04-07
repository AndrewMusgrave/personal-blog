import React from 'react'
import './Tag.scss'

const Tag = ({children}) => {
  return (
    <div className="Tag">
      {children}
    </div>
  )
}

export default Tag