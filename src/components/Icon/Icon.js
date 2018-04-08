import React from 'react';
import './Icon.scss';

function Icon({src, onClick}) {
  return (
    <i className={`fa fa-${src} social-media-icon`} onClick={onClick} />
  );
}

export default Icon;
