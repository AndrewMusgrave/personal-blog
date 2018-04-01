import React from 'react'
import Link from 'gatsby-link'
import './Link.scss'
import GatsbyLink from 'gatsby-link';

const Route = ({name, to, href}) => (
  to
    ? (
      <Link to={to} className="link">
        {name}
      </Link>
    ) : (
      <a href={href} className="link">
        {name}
      </a>
    )
);

export default Route;