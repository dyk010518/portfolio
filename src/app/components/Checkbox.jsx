'use client'
import { useState, useEffect, useRef } from 'react'
import { CheckIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/solid';



const Checkbox = ( {options, current, change, defaultDisplay, setFocusedIndex} ) => {
  const [isOpen, setIsOpen] = useState(false);
  const [reset, setReset] = useState(true);
  const [displayMessage, setDisplayMessage] = useState(defaultDisplay);

  const checkboxRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (checkboxRef.current && !checkboxRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (reset) {
      setDisplayMessage(defaultDisplay);
    } else if (current.length === 0) {
      setDisplayMessage("---");
    } else if (current.length === 1) {
      setDisplayMessage(current[0]);
    } else {
      setDisplayMessage(`${current[0]} +${(current.length - 1).toString()}`);
    }
  }, [reset, current, defaultDisplay]);

  const toggleCheckbox = () => {
      setIsOpen(!isOpen);
      setFocusedIndex(-1);
  };

  const closeCheckbox = () => {
    setIsOpen(false);
    setFocusedIndex(-1);
  }

  const clickReset = () => {
    change(options);
    setReset(true);
  }

  const clickOption = (option) => {
    if (reset) {
      change([option,]);
      setReset(false);
    } else {
      const currentOptions = [...current];
      current.includes(option) ? currentOptions.splice(currentOptions.indexOf(option), 1) : currentOptions.push(option);
      change(currentOptions);
      setReset(false);
    }
  }

  return (
    <div className='w-full py-6 pb-8'>
      <div className="relative inline-block" ref={checkboxRef}>
        <button
          type="button"
          className="px-4 py-2 justify-center text-white border-2 border-primary-500 hover:bg-primary-500 focus:ring-4 focus:outline-none focus:ring-primary-900 font-medium text-xs md:text-sm inline-flex items-center whitespace-nowrap w-40 md:w-48"
          onClick={toggleCheckbox}
        >
          {displayMessage}
          {isOpen ? <ChevronUpIcon className='h-3 w-5 pl-2' /> : <ChevronDownIcon className='h-3 w-5 pl-2' />}
        </button>

        {isOpen && (
          <div className="origin-top-right absolute right-0 mt-2 w-40 md:w-48 rounded-lg  bg-white ring-1 ring-black ring-opacity-5">
            <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
              <li key="all">
                <a
                  href="#"
                  className="block px-4 py-2 text-xs md:text-sm text-primary-600 hover:text-primary-300 hover:rounded-lg"
                  onClick={() => {
                    clickReset()
                    closeCheckbox()
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
                      className="block px-4 py-2 text-xs md:text-sm text-gray-700 hover:bg-gray-100 hover:rounded-lg"
                      onClick={() => {
                        clickOption(option)
                      }}
                    >
                      <div className='flex flex-row'>
                        {current.includes(option) && !reset ? <CheckIcon className='h-5 w-5 mr-2' /> : <div className='mr-7'/>}
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