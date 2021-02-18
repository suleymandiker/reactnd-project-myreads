import Book from "./Book";

const Shelve = (props) => {
  const { shelf, bookList, bookMoveToShelve } = props;
  const booksOnThisShelf = bookList.filter((book) => book.shelf === shelf.key);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.name}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {booksOnThisShelf.map((book) => (
            <Book
              key={book.id}
              shelf={shelf.key}
              book={book}
              bookMoveToShelve={bookMoveToShelve}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelve;
