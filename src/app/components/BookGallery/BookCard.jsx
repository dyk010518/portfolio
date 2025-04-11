import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import BookContent from './BookContent';

const backdropVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const cardVariants = {
  initial: { y: 500, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  exit: { y: 500, opacity: 0 },
};

const BookCard = ({ book, setFocusedIndex }) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => setIsExiting(true);

  const handleAnimationComplete = () => {
    if (isExiting) setFocusedIndex(-1);
  };

  return (
    <motion.div
      className="fixed inset-0 z-20 flex justify-center bg-black bg-opacity-70"
      variants={backdropVariants}
      initial="initial"
      animate={isExiting ? 'exit' : 'animate'}
      onAnimationComplete={handleAnimationComplete}
      transition={{ delay: 0.2, duration: 1 }}
    >
      <motion.div
        className="absolute bg-black border-2 border-primary-500 p-6 w-3/4 top-32 bottom-32 overflow-hidden"
        variants={cardVariants}
        initial="initial"
        animate={isExiting ? 'exit' : 'animate'}
        transition={{ duration: 1 }}
      >
        <button
          className="absolute top-8 right-8 border-slate-200 text-slate-400 hover:text-white hover:border-white"
          onClick={handleClose}
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
        <div className="overflow-y-auto max-h-full scrollbar-hide mb-16">
          <BookContent book={book} />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookCard;
