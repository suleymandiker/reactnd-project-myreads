import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import BookList from "./Components/BookList";
import * as BooksAPI from "./BooksAPI";
import SearchBooks from "./Components/SearchBooks";

class App extends React.Component {
  shelfStatus = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" }
  ];

  state = {
    bookList: [],
    searchList: []
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

  searchQuery = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query).then((books) => {
        if (books.error) {
          this.setState({ searchList: [] });
        } else {
          this.setState({ searchList: books });
        }
      });
    } else {
      this.setState({ searchList: [] });
    }
  };

  removeSearchList = () => {
    this.setState({ searchList: [] });
  };

  render() {
    const { bookList, searchList } = this.state;
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
              searchList={searchList}
              searchQuery={this.searchQuery}
              bookMoveToShelve={this.bookMoveToShelve}
              removeSearchList={this.removeSearchList}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
