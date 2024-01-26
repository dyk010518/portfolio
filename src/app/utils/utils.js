
export const getRowsOfBook = (books, booksPerRow) => {
  const rows = Math.ceil(books.length / booksPerRow);
  const rowsOfBooks = [];
  for(let i = 0; i < rows; i++){
    const rowOfBooks = books.slice(i*booksPerRow, (i+1)*booksPerRow);
    rowsOfBooks.push(rowOfBooks);
  }
  return rowsOfBooks;
}

export const sortBooks = (filteredBooks, filterBy) => {
  switch(filterBy){
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