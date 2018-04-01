import React from 'react'
import './List.scss'

const Nav = ({items, margin = true, type = 'row'}) => {
  const listMarkup = items && (
    items.map((item, ind) => (
      <li key={ind}>
        {item}
      </li>
    ))
  )

  const includeMargin = margin ? '' : ' no-margin';

  return (
    <ul className={`list list-${type}${includeMargin}`}>
      {listMarkup}
    </ul>
  )
}

export default Nav