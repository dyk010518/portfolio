import React from 'react'
import { motion } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/solid';


const BookCard = ({ book, index, focusedIndex, setFocusedIndex }) => {
  if (index !== focusedIndex) return null

  return (
    <motion.div 
          variants={{ initial: { y: 500, opacity: 0 }, final: { y: 0, opacity: 1 } }} 
          initial="initial" 
          animate="final"
          transition={{ duration: 1, delay: 0 }}
          className="fixed inset-0 bg-black bg-opacity-70 z-50"
    >
      <button
        className="absolute top-8 right-8 border-slate-200 text-slate-400 hover:text-white hover:border-white"
        onClick={() => setFocusedIndex(-1)}
      >
         <XMarkIcon className='h-8 w-8' />
      </button>
      {/* Replace the div below with your actual BookCard content */}
      {/* <div className="flex justify-center items-center h-full text-white text-xl">
        BookCard
      </div> */}
    </motion.div> 
  )
}

export default BookCard
