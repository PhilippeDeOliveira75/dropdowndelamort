import React, { useState } from 'react'
import './dropdown.css'
import Vector from './vector.svg'

function Dropdown() {

  const selection = ['option 1', 'option 2', 'option 3']
  const defaultText = "Choose an option"
  const buttonClass = "dropdown-button"
  const listClass = "dropdown-list"
  const itemClass = "dropdown-item"

  const [isOpen, setIsOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(defaultText)

  const toggleDropdown = () => setIsOpen((prev) => !prev)

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  }

  return (

    <div className="dropdown">
      <button
        className={`${buttonClass} ${isOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
      >
        {selectedItem}
        <img
          className="dropdown-icon"
          src={Vector}
          alt="Toggle dropdown"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}
        />
      </button>
      {isOpen && (
        <ul className={listClass}>
          {selection.map((item, index) => (
            <li
              key={index}
              className={itemClass}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

    </div>

  )

}

export default Dropdown