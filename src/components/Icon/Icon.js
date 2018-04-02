import React from 'react'
import Link from 'gatsby-link'
import './Icon.scss'

const Icon = ({src, onClick}) => (
  <i
    className={`fa fa-${src} social-media-icon`}
    onClick={onClick}
  />
);

export default Icon;