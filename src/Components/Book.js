import BookMoveToShelf from "./BookMoveToShelf";

const Book = (props) => {
  const { shelf, book, bookMoveToShelve } = props;

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${book.imageLinks.thumbnail})`
            }}
          />
          <BookMoveToShelf
            shelf={shelf}
            book={book}
            bookMoveToShelve={bookMoveToShelve}
          />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          {book.authors && book.authors.join(", ")}
        </div>
      </div>
    </li>
  );
};

export default Book;
