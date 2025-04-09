import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';
import BookContent from './BookContent';

const BookCard = ({ book, index, focusedIndex, setFocusedIndex }) => {
  const [shouldRender, setShouldRender] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    if (index === focusedIndex) {
      setShouldRender(true);
      setIsExiting(false);
    }
  }, [focusedIndex,]);

  const handleClose = () => {
    setIsExiting(true);
  };

  const handleAnimationComplete = () => {
    if (isExiting) {
      setShouldRender(false);
      setFocusedIndex(-1);
    }
  };

  if (!shouldRender) return null;

  const backdropAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const cardAnimation = {
    initial: { y: 500, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 500, opacity: 0 },
  };

  return (
    <motion.div
      initial="initial"
      animate={isExiting ? 'exit' : 'animate'}
      variants={backdropAnimation}
      transition={{ duration: 1 }}
      onAnimationComplete={handleAnimationComplete}
      className="fixed inset-0 z-20 flex justify-center bg-black bg-opacity-70"
    >
      <motion.div
        initial="initial"
        animate={isExiting ? 'exit' : 'animate'}
        variants={cardAnimation}
        transition={{ duration: 1 }}
        className="relative bg-black border-2 border-primary-500 p-6 w-3/4"
      >
        <button
          className="absolute top-8 right-8 border-slate-200 text-slate-400 hover:text-white hover:border-white"
          onClick={handleClose}
        >
          <XMarkIcon className="h-8 w-8" />
        </button>
        <BookContent book={book}/>
      </motion.div>
    </motion.div>
  );
};

export default BookCard;
