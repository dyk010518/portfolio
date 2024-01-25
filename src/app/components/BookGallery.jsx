"use client";
import { useState, useEffect } from "react";
import Book from "./Book"
import { getRowsOfBook } from "../utils/utils"
import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from 'framer-motion';



const BookGalley = () => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
  const size = useWindowSize();
  const booksPerRow = size.width < 768 ? 6 : 12;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/getBooks');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setBooks(JSON.parse(result));
        // setBooks(JSON.parse(JSON.stringify(result)));
      } catch (error) {
        return <p>Error...</p>;
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Render loading state
  if (loading) {
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
    <>
      <motion.h2 
        variants={{initial: { opacity: 0 }, final: { opacity: 1},}} 
        initial="initial" 
        animate="final"
        transition={{ duration: 1, delay: 0 }}
        className='text-center text-4xl md:text-5xl font-bold text-white mt-4 mb-8 md:mb-12'
      >
        Daniel&apos;s Bookshelf
      </motion.h2>
      {getRowsOfBook(books, booksPerRow).map((row, rowIndex) => {
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