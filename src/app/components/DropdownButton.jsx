'use client'
import React, { useState, useEffect, useRef } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';


const DropdownButton = ( {options, current, change, setFocusedIndex} ) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
      setFocusedIndex(-1);
  };

  const closeDropdown = () => {
      setIsOpen(false);
      setFocusedIndex(-1);
  };

  return (
    <div className='w-full py-6 pb-8'>
      <div className="relative inline-block" ref={dropdownRef}>
        <button
          type="button"
          className="book-filter-btn"
          onClick={toggleDropdown}
        >
          {current} 
          {isOpen ? <ChevronUpIcon className='h-3 w-5 pl-2' /> : <ChevronDownIcon className='h-3 w-5 pl-2' />}
        </button>

        {isOpen && (
          <div className="book-filter-option">
            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {options.map((option, index) => {
                return(
                  <li key={index}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 hover:rounded-lg"
                      onClick={() => {
                        closeDropdown()
                        change(option)
                      }}
                    >
                      {option}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default DropdownButton;