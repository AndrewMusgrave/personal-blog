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
  spacingNone = false,
  spacingTop = false,
  spacingBottom = false,
  screen,
}) {
  const className = classNames(
    'heading',
    size === 'large' && 'headingLarge',
    size === 'medium' && 'headingMedium',
    size === 'small' && 'headingSmall',
    size === 'extra-small' && 'headingExtraSmall',
    screen === 'web' && 'headingWeb',
    screen === 'mobile' && 'headingMobile',
    nav && 'nav-header',
    spacing && 'spacing-header',
    spacingNone && 'spacing-none',
    spacingTop && 'spacing-top-header',
    spacingBottom && 'spacing-bottom-header',
  );

  return <Element className={className}>{children}</Element>;
};

export default Heading;
