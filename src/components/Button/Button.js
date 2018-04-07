import React from 'react'
import GatsbyLink from 'gatsby-link'
import TextContainer from '../TextContainer';
import './Button.scss'

const Button = ({children, onClick, to}) => (
  to
    ? (
      <GatsbyLink to={to}
style={{
  color: 'inherit',
  textDecoration: 'none',
}}>
      <button
      className={`button`}
      onClick={onClick}
    >
      {children}
    </button>
    </GatsbyLink>
    )
    : (
      <button
      className={`button`}
      onClick={onClick}
    >
      {children}
    </button>
    )
);

export default Button;
