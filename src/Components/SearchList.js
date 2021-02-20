import React from "react";
import Book from "./Book";

const SearchList = (props) => {
  const { searchList, bookMoveToShelve } = props;
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {searchList.map((book) => (
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
