"use client";
import { useState, useEffect } from "react";
import Book from "./Book"


const BookGalley = () => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);

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
        console.log("Succeeded");
      }
    };

    fetchData();
  }, []);

  // Render loading state
  if (loading) {
      return <p>Loading...</p>;
  }

  return (
    <>
      <svg className="invisible absolute inset-0">
        <defs>
          <filter id="paper" x="0%" y="0%" width="100%" height="100%">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="8" result="noise" />
            <feDiffuseLighting in="noise" lightingColor="white" surfaceScale="1" result="diffLight">
              <feDistantLight azimuth="45" elevation="35" />
            </feDiffuseLighting>
          </filter>
        </defs>
      </svg>

      <div role="list" className="flex flex-row justify-center space-x-4">
        {books.slice(0,30).map((book, index) => (
          <Book
            book={book}
            index={index}
            focusedIndex={focusedIndex}
            setFocusedIndex={setFocusedIndex}
          ></Book>
        ))}
      </div>
    </>
  )
}

export default BookGalley