import React from 'react';
import {Link} from '..';

import './Button.scss';

function Button({children, onClick, to}){
  return to ? (
    <Link to={to}>
      <button className="button" onClick={onClick}>
        {children}
      </button>
    </Link>
  ) : (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
