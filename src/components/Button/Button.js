import React from 'react';
import {Link} from '..';

import './Button.scss';

function Button({children, onClick, to, full}){
  const spacingVar = full ? 'btn-full' : '';
  return to ? (
    <Link to={to}>
      <button className={`button ${spacingVar}`} onClick={onClick}>
        {children}
      </button>
    </Link>
  ) : (
    <button className={`button ${spacingVar}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
