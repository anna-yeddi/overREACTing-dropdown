import React, { useState } from 'react'
import PropTypes from 'prop-types'

function DropdownList({ currPage, options }) {
  // add hook:
  const [isSelected, setSelected] = useState(options[currPage])

  // handle state change:
  const onSelect = (e) => {
    // e.persist()
    // cache the event:
    let eTargetText = e.target.innerText

    setSelected((prevState) => {
      if (prevState === eTargetText) {
        return prevState
      } else {
        return options
          .filter((option) => {
            return option === eTargetText
          })
          .toString()
      }
    })
  }

  return (
    <>
      <ul className="dropdown" id="dropdown-list">
        {options.map((option, i) => (
          <li key={i} className={option === isSelected ? 'active' : null}>
            <a
              href={`#${option.split(' ')[0] + (option.split(' ')[1] || '')}`}
              aria-current={option === isSelected && 'page'}
              onClick={onSelect}>
              {option}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}

DropdownList.propTypes = {
  currPage: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default DropdownList
