import React, { useState } from 'react'
import PropTypes from 'prop-types'
import DropdownList from './DropdownList'

function Dropdown({ currPage, options }) {
  const [isOpened, setOpened] = useState(false)

  // handle click
  const onToggle = () => {
    setOpened((prevState) => {
      return !prevState
    })
  }

  return (
    <div className={`dropdown-wrapper ${isOpened ? 'open' : ''}`}>
      <button
        className="btn"
        aria-controls="dropdown-list"
        aria-expanded={isOpened}
        onClick={onToggle}>
        Account Settings
        <i className="material-icons" role="presentation">
          public
        </i>
      </button>
      <DropdownList isOpened={isOpened} currPage={currPage} options={options} />
    </div>
  )
}

Dropdown.propTypes = {
  currPage: PropTypes.number.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Dropdown
