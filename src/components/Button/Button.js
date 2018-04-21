import React from 'react';
import {Link} from '..';

import './Button.scss';

function Button({children, onClick, to, full, nav}){
  const spacingVar = full ? ' btn-full' : '';
  const navVar = nav ? ' btn-nav' : '';

  return to ? (
    <Link to={to}>
      <button className={`button ${spacingVar}${navVar}`} onClick={onClick}>
        {children}
      </button>
    </Link>
  ) : (
    <button className={`button ${spacingVar}${navVar}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
