function findAuthorById(authors, id) {
  
  return authors.find(author => id === author.id);
}

function findBookById(books, id) {
  
  return books.find(book => book.id === id);

  
}

function partitionBooksByBorrowedStatus(books) {
  
  const result = [];
  // if books were returned, create an array for that, if they were not add them to another array
  const borrowedBooks = books.filter(book => !book.borrows[0].returned);
  const unborrowedBooks = books.filter(book => book.borrows[0].returned);
  
  result.push(borrowedBooks);
  result.push(unborrowedBooks);
  
  return result;
}
  


function getBorrowersForBook(book, accounts) {
  
    const borrows = book.borrows;
  const result = [];
  
  borrows.forEach(borrow => {
    
    if (result.length >= 10) return;

    const borrower = accounts.find(account => account.id === borrow.id);
    const formattedBorrow = {
      ...borrow,
      ...borrower,
    };
    result.push(formattedBorrow);
  });
  
  return result;
  
  
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
