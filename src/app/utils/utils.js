const math = require('mathjs');

export const getRowsOfBook = (books, booksPerRow) => {
  `
  Given 'books', a list of books in the object format, and 'booksPerRow', the number of books to be included
  in each row, getRowsOfBook returns the list of the lists of books, where each sublist is a list of book
  per row
  `
  const rows = Math.ceil(books.length / booksPerRow);
  const rowsOfBooks = [];
  for(let i = 0; i < rows; i++){
    const rowOfBooks = books.slice(i*booksPerRow, (i+1)*booksPerRow);
    rowsOfBooks.push(rowOfBooks);
  }
  return rowsOfBooks;
}

export const sortBooks = (filteredBooks, sortBy) => {
  const sortStrategies = {
    "Rating (highest)": (a, b) => b.rating - a.rating,
    "Rating (lowest)": (a, b) => a.rating - b.rating,
    "Alphabetical (0-9a-z)": (a, b) => a.title.localeCompare(b.title),
    "Alphabetical (z-a9-0)": (a, b) => b.title.localeCompare(a.title),
    "Read Date (newest)": (a, b) => new Date(b.finished) - new Date(a.finished),
    "Read Date (oldest)": (a, b) => new Date(a.finished) - new Date(b.finished),
  };

  const sortFn = sortStrategies[sortBy];

  return sortFn ? [...filteredBooks].sort(sortFn) : filteredBooks;
};

export const delay = (delayInms) => {
  `
  Given a 'delayInms' (in ms) to delay by, delay forces a delay of that amount of time
  `
  return new Promise(resolve => setTimeout(resolve, delayInms));
};

export const getGenres = (books) => {
  `
  Given 'books', a list of books, getGenres returns the list of unique genres in all of the books
  `
  let allGenres = new Set();
  for (const each of books) {
    allGenres = new Set([...allGenres, ...Array.from(each.genres)]);
  }
  return Array.from(allGenres).sort();
};

export const filterBooks = (books, genres) => {
  `
  Given 'books', a list of books, and 'genres', a list of genres to filter the books by,
  filterBooks returns the list of books whose genre is included in 'genres'
  `
  return books.filter(book =>
    book.genres.some(genre => genres.includes(genre))
  );
};

export const rateBooks = (books) => {
  `
  Given 'books', a list of books, returns the list of books with a new feature, "rating", a number that
  represents the book's rating. Each book's rating is defined as follows:

  - For books whose class is "good", they are linearly spaced for the rating from 6.7 to 10.0.
  - For books whose class is "okay", they are linearly spaced for the rating from 3.4 to 6.6.
  - For books whose class is "bad", they are linearly spaced for the rating from 0.1 to 3.3.
  `
  
  // Helper function to assign ratings based on book class
  const assignRatings = (books, minRating, maxRating) => {
    const sortedBooks = books.sort((a, b) => b.ranking - a.ranking);
    const ratings = linspace(minRating, maxRating, sortedBooks.length);
    
    return sortedBooks.map((book, index) => {
      book.rating = ratings[index];
      return book;
    });
  };

  // Separate books into categories and assign ratings
  const goodBooks = books.filter(book => book.class === "good");
  const okayBooks = books.filter(book => book.class === "okay");
  const badBooks = books.filter(book => book.class === "bad");

  // Assign ratings for each category
  const ratedGoodBooks = assignRatings(goodBooks, 6.7, 10.0);
  const ratedOkayBooks = assignRatings(okayBooks, 3.4, 6.6);
  const ratedBadBooks = assignRatings(badBooks, 0.1, 3.3);

  // Combine all rated books
  return [...ratedGoodBooks, ...ratedOkayBooks, ...ratedBadBooks];
};

const linspace = (start, stop, num) => {
  const step = (stop - start) / (num - 1);
  const result = [];

  for (let i = 0; i < num; i++) {
    result.push(start + step * i);
  }

  return result;
}

export const assignGenres = (books) => {
  `
  Given 'books', a list of books, returns the list of books with "genres" as a
  list of genres
  `
  const filteredBooks = [];
  for(const each of books){
    const genres = each.genre.split(", ").sort()
    each.genres = genres
    filteredBooks.push(each) 
  }
  return filteredBooks;
}
