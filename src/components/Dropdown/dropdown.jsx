import React, { useState } from 'react';
import './dropdown.css';
import Vector from './vector.svg';

function Dropdown({
  id,
  selection = ['Option 1', 'Option 2', 'Option 3'],
  defaultText = 'Choose an option',
  buttonClass = 'dropdown-button',
  listClass = 'dropdown-list',
  itemClass = 'dropdown-item',
  value,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(value || defaultText);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleItemClick = (item) => {
    setSelectedItem(item)
    onChange(item)
    setIsOpen(false)
  };

  return (
    <div className="dropdown">
      <button
        id={id ? `${id}-button` : undefined}
        className={`${buttonClass} ${isOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
        type="button"
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
        <ul id={id ? `${id}-list` : undefined} className={listClass}>
          {selection.map((item, index) => (
            <li
              key={index}
              className={`${itemClass} ${item === selectedItem ? 'hidden' : ''}`}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
