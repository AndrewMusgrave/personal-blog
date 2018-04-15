import React from 'react';

import './Container.scss';

export default function Container({children, size = 'medium', center}) {
  const containerSize = `${size}Container`;
  const containerCenter = center ? ' container-center' : '';

  return <div className={`${containerSize}${containerCenter}`}>{children}</div>;
}
