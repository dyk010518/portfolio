'use client'
import React, { useState } from 'react'
import { CheckIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';



const Checkbox = ( {options, current, change} ) => {
  const [isOpen, setIsOpen] = useState(false);
  const [all, setAll] = useState(true);

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };

  const clickAll = () => {
    change(options);
    setAll(true);
  }

  const clickOption = (option) => {
    if (all) {
      change([option,]);
      setAll(false);
    }else{
      const currentOptions = [...current];
      current.includes(option) ? currentOptions.splice(currentOptions.indexOf(option), 1) : currentOptions.push(option);
      change(currentOptions);
      setAll(false);
    }
  }

  return (
    <div className='w-full py-6 pb-8'>
      <div className="relative inline-block">
        <button
          type="button"
          className="px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm inline-flex items-center"
          onClick={toggleDropdown}
        >
          Genres
          {isOpen ? <ChevronUpIcon className='h-3 w-5 pl-2' /> : <ChevronDownIcon className='h-3 w-5 pl-2' />}
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg  bg-white ring-1 ring-black ring-opacity-5">
            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <li key="all">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-blue-700 hover:text-blue-400 hover:rounded-lg"
                  onClick={() => {
                    clickAll()
                  }}
                >
                  <div className='flex flex-row'>
                    <div className='mr-7'/>
                    Reset
                  </div>
                </a>
              </li>

              {options && options.map((option, index) => {
                return(
                  <li key={index}>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-lg"
                      onClick={() => {
                        clickOption(option)
                      }}
                    >
                      <div className='flex flex-row'>
                        {current.includes(option) && !all ? <CheckIcon className='h-5 w-5 mr-2' /> : <div className='mr-7'/>}
                        {option}
                      </div>
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

export default Checkbox;