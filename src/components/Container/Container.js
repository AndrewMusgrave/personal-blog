import React from 'react';

import './Container.scss';

export default function Container ({children, size = 'medium'}) {
  const containerSize = `${size}Container`

  return (
    <div className={`${containerSize}`}>
      {children}
    </div>
  )
};
