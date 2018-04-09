import React from 'react';
import Link from 'gatsby-link';
import './Link.scss';

function Route ({children, name, to}) {
  console.log('Redirecting too: ', to);
  return (
    <Link to={to} className="link">
      {name || children}
    </Link>
  );
}

export default Route;
