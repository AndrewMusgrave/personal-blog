import React, { Component } from 'react';
import './Heading.scss';

function classNames(...props) {
  return props.filter(Boolean).join(' ');
}

const Heading = ({ children, Element = 'h2', size = 'medium' }) => {
  const className = classNames(
    'heading',
    size === 'large' && 'headingLarge',
    size === 'medium' && 'headingMedium',
    size === 'small' && 'headingSmall',
  );

  return <Element className={className}>{children}</Element>;
};

export default Heading;
