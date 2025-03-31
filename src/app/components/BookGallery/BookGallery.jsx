"use client";
import { useState, useEffect } from "react";
import { getRowsOfBook, sortBooks, delay, getGenres, filterBooks } from "../../utils/utils"
import { useWindowSize } from "@uidotdev/usehooks";
import { motion } from 'framer-motion';
import BookHeader from "./BookHeader";
import BookFilter from "./BookFilter";
import Book from "./Book"

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
  const [sortedBooks, setSortedBooks] = useState(null);

  useEffect(() => {
    if (books) {
      setSortedBooks(sortBooks(filterBooks(books, genres), orderBy));
    }
  }, [books, orderBy, genres]);

  // Get the books data and set the loading to "false"
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
  const booksPerRow = size.width < 768 ? 6 : (size.width < 1024 ? 8 : 12);

  return (
    <>
      <BookHeader isLoading={loading}/>

      {!loading && (
        <>
          <BookFilter 
            sortedBooks={sortedBooks}
            orderOptions={orderOptions}
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            genreOptions={genreOptions}
            genres={genres}
            setGenres={setGenres}
            setFocusedIndex={setFocusedIndex}
          />

          {sortedBooks && getRowsOfBook(sortedBooks, booksPerRow).map((row, rowIndex) => {
            return (          
              <motion.div
                key={`${genres}-${orderBy}-${rowIndex}`}
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
                  <div className="flex h-6 w-[80vw] bg-gray-500 mb-10 justify-center bg-[url('/images/marble-background.png')]"/>
                </div>
              </motion.div>
            )
          })}

          {(!sortedBooks?.length) && (
            <div className="h-[100vh] w-full opacity-0">
              {/* Invisible body to keep the layout stable */}
            </div>
          )}
        </>
      )}
    </>
  )
}

export default BookGalley