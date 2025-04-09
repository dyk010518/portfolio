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
    
  return (
    <>
      <div className='md:grid md:grid-cols-2'>
        <Image src={`/images/books/${image_file}.png`} width={500} height={500} />
        <div>
          <h2 className="text-xl font-semibold text-primary-400 mb-2">{book.title}</h2>
          <p className="text-m text-gray-400 mb-4">by {book.author}</p>
          <p className="text-gray-800 text-sm">{`${month} ${day}, ${year}`}</p>
          <p className="text-gray-800 text-sm">{book.comment}</p>
          <p className="text-gray-800 text-sm">{book.description}</p>
          <p className="text-gray-800 text-sm">{book.description}</p>
          <p className="text-gray-800 text-sm">{book.genre}</p>
          <p className="text-gray-800 text-sm">{book.quote}</p>
          <p className="text-gray-800 text-sm">{book.rating}</p>
        </div>

      </div>
    </>
  );
};

export default BookContent;
