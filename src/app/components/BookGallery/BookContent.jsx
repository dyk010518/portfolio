import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
        <div className='lg:mr-8 m-4'>
          <h2 className="text-2xl lg:text-4xl font-semibold text-primary-400">{book.title}</h2>
          <p className="text-lg lg:text-xl text-gray-200 mb-2">by {book.author}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {book.genres.map((genre, idx) => (
              <div
                key={idx}
                className="text-[#010f18] bg-primary-300 rounded-md px-2 py-1 text-xs font-semibold inline-flex items-center justify-center"
              >
                {genre}
              </div>
            ))}
          </div>
          <p className={`text-md font-semibold ${getClassColor(book.class)} mb-4`}>{book.rating.toFixed(1)} / 10.0</p>
          <p className="text-gray-200 text-md">Favorite quote:</p>
          <p className="text-[#ADB7BE] text-sm mb-4">{book.quote}</p>
          <p className="text-gray-200 text-md">Comment:</p>
          <p className="text-[#ADB7BE] text-sm mb-4 whitespace-pre-line">
            {book.comment}
          </p>
          <p className="text-gray-200 text-sm text-right">Read on {`${month} ${day}, ${year}`}</p>
        </div>

      </div>
    </>
  );
};

export default BookContent;
