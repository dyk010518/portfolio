"use client";
import { useState, useEffect } from "react";
import { getRowsOfBook, sortBooks, delay, getGenres, filterBooks } from "../../utils/utils"
import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from 'framer-motion';
import BookHeader from "./BookHeader";
import Book from "./Book"
import DropdownButton from "../DropdownButton";
import Checkbox from '../Checkbox'

const orderOptions = [
  "Rating (highest)", 
  "Rating (lowest)", 
  "Alphabetical (a-z)", 
  "Alphabetical (z-a)", 
  "Read Date (newest)", 
  "Read Date (oldest)",
];

const BookGalley = () => {

  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [orderBy, setOrderBy] = useState(orderOptions[0]);
  const [genreOptions, setGenreOptions] = useState(null);
  const [genres, setGenres] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await delay(2000);
        const response = await fetch('/api/getBooks');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        const booksFormatted = JSON.parse(result);
        setBooks(booksFormatted);
        setGenreOptions(getGenres(booksFormatted));
        setGenres(getGenres(booksFormatted));
      } catch (error) {
        return <p>Error...</p>;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const size = useWindowSize();
  const booksPerRow = size.width < 768 ? 6 : 12;
  
  const filteredBooks = books && filterBooks(books, genres);
  const sortedBooks = filteredBooks && sortBooks(filteredBooks, orderBy);

  return (
    <>
      <BookHeader isLoading={loading}/>

      {sortedBooks && <ul className="flex flex-row justify-center">
        <DropdownButton 
          options={orderOptions} 
          current={orderBy} 
          change={setOrderBy}
        />
        <Checkbox 
          options={genreOptions} 
          current={genres} 
          change={setGenres}
        />
      </ul>}


      {sortedBooks && getRowsOfBook(sortedBooks, booksPerRow).map((row, rowIndex) => {
        return (          
          <motion.div
            key={rowIndex}
            variants={{initial: { y: 100, opacity: 0 }, final: { y: 0, opacity: 1},}} 
            initial="initial" 
            animate="final"
            transition={{ duration: 0.7, delay: 1.2 + rowIndex * 0.8 }}
          >
            <ul className="flex flex-row justify-center space-x-4">
              {row.map((book, index) => (
                <Book
                    key={index}
                    book={book}
                    index={index + rowIndex*booksPerRow}
                    focusedIndex={focusedIndex}
                    setFocusedIndex={setFocusedIndex}
                ></Book>
              ))}
            </ul> 
            <div className="flex justify-center">
              <div className="flex h-5 w-200 bg-gray-500 mb-10 justify-center"/>
            </div>
          </motion.div>
        )
      })}
    </>
  )
}

export default BookGalley