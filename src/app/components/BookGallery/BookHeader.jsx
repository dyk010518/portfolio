import React from 'react'
import { motion } from 'framer-motion';

const BookHeader = ({ isLoading }) => {
  // Render loading state
  if (isLoading) {
    return (
      <motion.div
        variants={{initial: { y: 0, opacity: 0 }, final: { y: 0, opacity: 1},}} 
        initial="initial" 
        whileInView="final"
        transition={{ duration: 0.7, delay: 0.3 }}
        className="flex justify-center text-center h-screen"
      >
        <h1 className="text-white mt-32 text-4xl sm:text-7xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            Welcome to My Bookshelf{" "}
          </span>
        </h1>
      </motion.div>)
  }
  return (
    <motion.h2 
        variants={{initial: { opacity: 0 }, final: { opacity: 1},}} 
        initial="initial" 
        animate="final"
        transition={{ duration: 1, delay: 0 }}
        className='text-center text-4xl md:text-5xl font-bold text-white mt-4 mb-4'
      >
        Daniel&apos;s Bookshelf
    </motion.h2>
  )
}

export default BookHeader