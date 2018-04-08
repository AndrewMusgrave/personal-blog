import React from 'react';
import Link from '../Link';
import TextContainer from '../TextContainer';
import './Button.scss';

const Button = ({ children, onClick, to }) =>
  to ? (
    <Link to={to}>
      <button className={`button`} onClick={onClick}>
        {children}
      </button>
    </Link>
  ) : (
    <button className={`button`} onClick={onClick}>
      {children}
    </button>
  );

export default Button;
