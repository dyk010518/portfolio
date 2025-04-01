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
          className="px-4 py-2 justify-center text-white border-2 border-primary-500 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-900 font-medium text-xs md:text-sm inline-flex items-center whitespace-nowrap w-40 md:w-48"
          onClick={toggleDropdown}
        >
          {current} 
          {isOpen ? <ChevronUpIcon className='h-3 w-5 pl-2' /> : <ChevronDownIcon className='h-3 w-5 pl-2' />}
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-40 md:w-48 rounded-lg  bg-white ring-1 ring-black ring-opacity-5">
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