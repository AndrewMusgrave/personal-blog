import React from 'react'
import './TextContainer.scss'

const TextContainer = ({children, uppercase}) => {
  const textTransform = uppercase ? 'uppercase ' : '';
  return (
    <div className={`${textTransform}text-container`}>
      {children}
    </div>
  )
}

export default TextContainer