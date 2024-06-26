
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
      return filteredBooks.sort((a,b) => (a.rating > b.rating) ? 1 : ((b.rating > a.rating) ? -1 : 0));
    case "Rating (lowest)":
      return filteredBooks.sort((a,b) => (a.rating > b.rating) ? -1 : ((b.rating > a.rating) ? 1 : 0));
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