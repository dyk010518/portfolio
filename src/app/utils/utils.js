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
  `
  Given 'filteredBooks', a list of books already filtered by the genres, and 'sortBy', a criteria to sort the
  book by, sortBooks returns the list of books that is sorted by the criteria
  `
  switch(sortBy){
    case "Rating (highest)":
      return filteredBooks.sort((a,b) => b.rating - a.rating);
    case "Rating (lowest)":
      return filteredBooks.sort((a,b) => a.rating - b.rating);
    case "Alphabetical (a-z)":
      return filteredBooks.sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0));
    case "Alphabetical (z-a)":
      return filteredBooks.sort((a,b) => (a.title > b.title) ? -1 : ((b.title > a.title) ? 1 : 0));
    case "Read Date (newest)":
      return filteredBooks.sort((a,b) => (a.finished > b.finished) ? -1 : ((b.finished > a.finished) ? 1 : 0));
    case "Read Date (oldest)":
      return filteredBooks.sort((a,b) => (a.finished > b.finished) ? 1 : ((b.finished > a.finished) ? -1 : 0));
  }
}

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
  const genres = new Set();
  for(const each of books){
    genres.add(each.genre);
  }
  return Array.from(genres);
}

export const filterBooks = (books, genres) => {
  `
  Given 'books', a list of books, and 'genres', a list of genres to filter the books by, filterBooks returns
  the list of books whose genre is included in 'genres'
  `
  const filteredBooks = [];
  for(const each of books){
    genres.includes(each.genre) && filteredBooks.push(each);
  }
  return filteredBooks;
}

export const rateBooks = (books) => {
  `
  Given 'books', a list of books, returns the list of books with a new feature, "rating", a number that
  represents the book's rating. Each book is rating is defined as follow:

  For books whose class is "good", they are linearly spaced for the rating from 6.7 to 10.0
  For books whose class is "okay", they are linarly spaced for the rating from 3.4 to 6.6
  For books whose class is "bad", they are linearly spaced for the rating from 0.1 to 3.3
  `
  const ratedBooks = [];
  const good_books = books.filter(book => book.class === "good")
  const okay_books = books.filter(book => book.class === "okay")
  const bad_books = books.filter(book => book.class === "bad")

  good_books.sort((a, b) => b.ranking - a.ranking)
  console.log(good_books)
  const good_ratings = linspace(6.7, 10, good_books.length)
  for (let i = 0; i < good_books.length; i++){
    const new_book = good_books[i]
    new_book.rating = good_ratings[i]
    ratedBooks.push(new_book)
  }

  okay_books.sort((a, b) => b.ranking - a.ranking)
  const okay_ratings = linspace(3.4, 6.6, okay_books.length)
  for (let i = 0; i < okay_books.length; i++){
    const new_book = okay_books[i]
    new_book.rating = okay_ratings[i]
    ratedBooks.push(new_book)
  }

  bad_books.sort((a, b) => b.ranking - a.ranking)
  const bad_ratings = linspace(0.1, 3.3, bad_books.length)
  for (let i = 0; i < bad_books.length; i++){
    const new_book = bad_books[i]
    new_book.rating = bad_ratings[i]
    ratedBooks.push(new_book)
  }
  return books
}

const linspace = (start, stop, num) => {
  const step = (stop - start) / (num - 1);
  const result = [];

  for (let i = 0; i < num; i++) {
    result.push(start + step * i);
  }

  return result;
}
