import React from 'react';
import './Heading.scss';

function classNames(...props) {
  return props.filter(Boolean).join(' ');
}

function Heading ({
  children,
  Element = 'h2',
  size = 'medium',
  nav = false,
  spacing = false,
  spacingTop = false,
  screen,
}) {
  const className = classNames(
    'heading',
    size === 'large' && 'headingLarge',
    size === 'medium' && 'headingMedium',
    size === 'small' && 'headingSmall',
    screen === 'web' && 'headingWeb',
    screen === 'mobile' && 'headingMobile',
    nav && 'nav-header',
    spacing && 'spacing-header',
    spacingTop && 'spacing-top-header',
  );

  return <Element className={className}>{children}</Element>;
};

export default Heading;
