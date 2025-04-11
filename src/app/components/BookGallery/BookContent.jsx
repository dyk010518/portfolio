import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';

const BookContent = ({ book }) => {
  const finishedDate = new Date(book.finished);
  const image_file = book.title.replace(/\s+/g, '_').toLowerCase();
  
  const year = finishedDate.getUTCFullYear();
  const month = finishedDate.toLocaleString('en-US', { month: 'long', timeZone: 'UTC' }); // "August"
  const day = finishedDate.getUTCDate();

  // Conditional text color based on book.class
  const getClassColor = (bookClass) => {
    switch (bookClass) {
      case 'good':
        return 'text-green-500'; // Green for good
      case 'okay':
        return 'text-yellow-500'; // Orange for okay
      case 'bad':
        return 'text-red-500'; // Red for bad
      default:
        return 'text-gray-800'; // Default color for other cases
    }
  };
    
  return (
    <>
      <div className='lg:grid lg:grid-cols-[1fr_2fr] mt-16 gap-16'>
        <div className='lg:ml-8 w-[50%] lg:w-full mx-auto mb-8 lg:mb-0'>
          <Image 
            src={`/images/books/${image_file}.png`}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }} // optional
          />
        </div>
        <div className='lg:mr-8'>
          <h2 className="text-xl font-semibold text-primary-400 mb-2">{book.title}</h2>
          <p className="text-m text-gray-400 mb-4">by {book.author}</p>
          <p className="text-gray-800 text-sm">{`${month} ${day}, ${year}`}</p>
          <div 
            className={`text-[#121212] bg-primary-300 border-primary-300 rounded-lg border-2 px-2 py-1 text-xs font-semibold inline-flex items-center justify-center`}
          >
              {book.genre}
          </div>
          <p className={`text-sm font-semibold ${getClassColor(book.class)}`}>{book.rating.toFixed(1)} / 10.0</p>
          <p className="text-[#ADB7BE] text-sm">{book.quote}</p>
          <p className="text-[#ADB7BE] text-sm mb-10 whitespace-pre-line">
            {book.comment}
          </p>
        </div>

      </div>
    </>
  );
};

export default BookContent;
