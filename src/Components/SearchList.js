import React from "react";
import Book from "./Book";

const SearchList = (props) => {
  const { searchBooks, bookMoveToShelve, onResetSearch } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchBooks.map((book) => (
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
