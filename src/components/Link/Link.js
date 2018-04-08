import React from 'react'
import Link from 'gatsby-link'
import './Link.scss'

const Route = ({children, name, to, href}) => (
    <Link to={to} className="link">
      {name || children}
    </Link>
);

export default Route;