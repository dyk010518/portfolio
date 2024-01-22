"use client";
import clsx from "clsx";
import { useState, useEffect } from "react";


const animationStyle = "transition-all duration-500 ease will-change-auto"

const BookGalley = () => {
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [books, setBooks] = useState(null);
  const [loading, setLoading] = useState(true);
//   console.log(Books);

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
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  // Render loading state
  if (loading) {
      return <p>Loading...</p>;
  }
  console.log(books);
  console.log("Why not here");

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
        {books.slice(5,10).map((book, index) => (
          <button
            role="listitem"
            key={book.title}
            onClick={() => {
              if (index === focusedIndex) {
                setFocusedIndex(-1)
              } else {
                setFocusedIndex(index)
              }
            }}
            className={clsx(
              "flex shrink-0 flex-row items-center outline-none",
              focusedIndex !== index && "hover:-translate-y-4 focus-visible:-translate-y-4",
              focusedIndex === index ? "basis-60" : "basis-12",
              animationStyle
            )}
            style={{ perspective: "1000px", WebkitPerspective: "1000px" }}
          >
            <div
              className={clsx(
                "z-50 h-full w-[44px] shrink-0 origin-right py-4 brightness-[0.80] contrast-[2.00]",
                animationStyle
              )}
              style={{
                backgroundColor: book.backgroundColor,
                color: book.fontColor,
                transformStyle: "preserve-3d",
                transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
                  focusedIndex === index ? "-60deg" : "0deg"
                }) rotateZ(0deg) skew(0deg, 0deg)`,
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none fixed top-0 left-0 z-50 h-full w-full opacity-40 [filter:url(#paper)]"
              />
              <h2 
                className={clsx(
                  "m-auto font-medium",
                  book.title.length > 30 ? "text-xs" : (book.title.length > 15 ? "text-base" : "text-xl"),
                )}
                style={{ writingMode: "vertical-lr" }}
              >
                {book.title}
              </h2>
            </div>
            <div
              className={clsx(
                "relative z-10 h-72 shrink-0 origin-left overflow-hidden border-gray-900 brightness-[0.80] contrast-[2.00]",
                animationStyle
              )}
              style={{
                transformStyle: "preserve-3d",
                transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(${
                  focusedIndex === index ? "30deg" : "90deg"
                }) rotateZ(0deg) skew(0deg, 0deg)`,
              }}
            >
              <span
                aria-hidden
                className="pointer-events-none fixed top-0 right-0 z-50 h-full w-full opacity-40 [filter:url(#paper)]"
              />
              <span
                aria-hidden
                className="pointer-events-none absolute top-0 left-0 z-50 h-full w-full"
                style={{
                  background: `linear-gradient(to right, rgba(255, 255, 255, 0) 2px, rgba(255, 255, 255, 0.5) 3px, rgba(255, 255, 255, 0.25) 4px, rgba(255, 255, 255, 0.25) 6px, transparent 7px, transparent 9px, rgba(255, 255, 255, 0.25) 9px, transparent 12px)`,
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/about-image.png" alt={book.title} className={clsx("h-full w-48 bg-cover", animationStyle)} />
            </div>
          </button>
        ))}
      </div>
    </>
  )
}

export default BookGalley