import React from 'react'
import DropdownButton from "../DropdownButton";
import Checkbox from '../Checkbox'
import { getRowsOfBook, sortBooks, delay, getGenres, filterBooks } from "../../utils/utils"

import { motion } from 'framer-motion';

const BookFilter = ({ sortedBooks, orderOptions, orderBy, setOrderBy, genreOptions, genres, setGenres }) => {  
  return (
    <>
      {sortedBooks && 
        <motion.div 
          variants={{initial: { opacity: 0 }, final: { opacity: 1},}} 
          initial="initial" 
          animate="final"
          transition={{ duration: 1, delay: 0 }}
          className="flex flex-row justify-center items-center relative gap-2 py-6 z-10"
        >
          <DropdownButton 
            options={orderOptions} 
            current={orderBy} 
            change={setOrderBy}
          />
          <Checkbox 
            options={genreOptions} 
            current={genres} 
            change={setGenres}
            defaultDisplay="Genres"
          />
        </motion.div>
      }
    </>
  )
}

export default BookFilter