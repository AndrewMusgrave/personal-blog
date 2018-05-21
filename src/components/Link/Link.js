import React from 'react';
import Link from 'gatsby-link';
import './Link.scss';

function Route ({children, name, to, ...rest}) {
  return (
    <Link {...rest} to={to} className="link">
      {name || children}
    </Link>
  );
}

export default Route;
