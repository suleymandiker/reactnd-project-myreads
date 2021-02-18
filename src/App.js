import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import BookList from "./Components/BookList";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./Components/SearchBooks";
import { debounce } from "throttle-debounce";

class App extends React.Component {
  shelfStatus = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" }
  ];

  state = {
    bookList: [],
    searchBooks: []
  };

  componentDidMount = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ bookList: books });
    });
  };

  bookMoveToShelve = (book, shelf) => {
    BooksAPI.update(book, shelf);

    let movedBook = this.state.bookList.filter((b) => b.id !== book.id);

    if (shelf !== "none") {
      book.shelf = shelf;
      movedBook = movedBook.concat(book);
    }

    this.setState({
      bookList: movedBook
    });
  };

  searchForBooks = debounce(300, false, (query) => {
    //console.log(query);
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        //   console.log('result', books);
        if (books.error) {
          this.setState({ searchBooks: [] });
        } else {
          this.setState({ searchBooks: books });
        }
      });
    } else {
      this.setState({ searchBooks: [] });
    }
  });
  resetSearch = () => {
    this.setState({ searchBooks: [] });
  };

  render() {
    const { bookList, searchBooks } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <BookList
              shelfStatus={this.shelfStatus}
              bookList={bookList}
              bookMoveToShelve={this.bookMoveToShelve}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              searchBooks={searchBooks}
              onSearch={this.searchForBooks}
              bookMoveToShelve={this.bookMoveToShelve}
              onResetSearch={this.resetSearch}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
