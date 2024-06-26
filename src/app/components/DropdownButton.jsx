'use client'
import React, { useState } from 'react'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';


const DropdownButton = ( {options, current, change} ) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
      setIsOpen(false);
  };

  return (
    <div className='w-full py-6 pb-8'>
      <div className="relative inline-block">
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          {current} 
          {isOpen ? <ChevronUpIcon className='h-3 w-5 pl-2' /> : <ChevronDownIcon className='h-3 w-5 pl-2' />}
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg  bg-white ring-1 ring-black ring-opacity-5">
            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              {options.map((option, index) => {
                return(
                  <li key={index}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-lg"
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