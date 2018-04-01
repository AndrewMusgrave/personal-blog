import React from 'react'
import TextContainer from '../TextContainer';
import './Button.scss'

const Button = ({children, onClick}) => (
  <button
    className={`button`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;