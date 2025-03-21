import React from 'react'
import DropdownButton from "../DropdownButton";
import Checkbox from '../Checkbox'
import { getRowsOfBook, sortBooks, delay, getGenres, filterBooks } from "../../utils/utils"

import { motion } from 'framer-motion';

const BookFilter = ({ sortedBooks, orderOptions, orderBy, setOrderBy, genreOptions, genres, setGenres }) => {
  const handleOrderChange = async (newOrder) => {
    setOrderBy("Nonsense")
    await delay(300)
    setOrderBy(newOrder)
  }

  const handleGenresChange = async (newGenres) => {
    setGenres([]);
    await delay(100)
    setGenres(newGenres)
  }
  
  
  return (
    <>
      {sortedBooks && <ul className="flex flex-row justify-center relative z-10">
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
      </ul>}
    </>
  )
}

export default BookFilter