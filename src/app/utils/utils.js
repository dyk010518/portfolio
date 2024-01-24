
export const getRowsOfBook = (books, booksPerRow) => {
    const rows = Math.ceil(books.length / booksPerRow);
    const rowsOfBooks = [];
    for(let i = 0; i < rows; i++){
        const rowOfBooks = books.slice(i*booksPerRow, (i+1)*booksPerRow);
        rowsOfBooks.push(rowOfBooks);
    }
    return rowsOfBooks;
}