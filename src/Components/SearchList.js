import React from "react";
import Book from "./Book";

const SearchList = (props) => {
  const { searchList, bookList, bookMoveToShelve } = props;

  const finalSearchList = searchList.map((book) => {
    bookList.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
      return b;
    });
    return book;
  });

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {finalSearchList.map((book) => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf ? book.shelf : "none"}
            bookMoveToShelve={bookMoveToShelve}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchList;
