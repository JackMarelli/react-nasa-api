// Dropdown.jsx

import React, { useState } from 'react';

const Dropdown = ({ id, options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
     setSelectedOption(option);
    onSelect(option, id);
    setIsOpen(false);
  };

  return (
    <div className="inline-block relative">
      <button
        className="bg-orange-500 text-white w-40 px-4 py-2 rounded-md flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption || `${id.charAt(0).toUpperCase() + id.slice(1)}`}
        <svg
          className="w-5 h-5 ml-2 mr-1"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 left-0 mt-2 min-w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" style={{ minWidth: 'max-content' }}>
          <div className="py-1" role="menu">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => handleOptionClick(option)}
                className="block w-full px-4 py-2 text-start text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
