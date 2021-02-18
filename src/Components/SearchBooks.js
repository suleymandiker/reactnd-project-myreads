import React from "react";
import { Link } from "react-router-dom";
import SearchList from "./SearchList";
import BooksAPI from "../BooksAPI";

class SearchBooks extends React.Component {
  state = {
    value: ""
  };

  handleChange = (event) => {
    // this.setState({ value: event.target.value });
    const searchInputValue = event.target.value;
    this.setState({ value: searchInputValue }, () => {
      // console.log(searchInputValue);

      // if (val.length >= 1) {
      this.props.onSearch(searchInputValue);
      // }
    });
  };

  render() {
    const { searchBooks, bookMoveToShelve, onResetSearch } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={onResetSearch}>
              Close
            </button>
          </Link>
          <input
            type="text"
            value={this.state.value}
            placeholder="Search Something"
            onChange={this.handleChange}
            autoFocus
          />
          <SearchList
            searchBooks={searchBooks}
            bookMoveToShelve={bookMoveToShelve}
            onResetSearch={onResetSearch}
          />
          {console.log(searchBooks)}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
