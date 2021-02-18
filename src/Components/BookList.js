import React from "react";
import Shelve from "./Shelve";
import SearchButton from "./SearchButton";

const BookList = (props) => {
  const { shelfStatus, bookList, bookMoveToShelve } = props;

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelfStatus.map((shelf) => (
            <Shelve
              key={shelf.key}
              bookList={bookList}
              shelf={shelf}
              bookMoveToShelve={bookMoveToShelve}
            />
          ))}
          <SearchButton />
        </div>
      </div>
    </div>
  );
};

export default BookList;
