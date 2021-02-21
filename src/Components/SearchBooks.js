import React from "react";
import { Link } from "react-router-dom";
import SearchList from "./SearchList";

class SearchBooks extends React.Component {
  state = {
    value: ""
  };

  handleChange = (event) => {
    const searchInputValue = event.target.value;
    this.setState({ value: searchInputValue }, () => {
      this.props.searchQuery(searchInputValue);
    });
  };

  render() {
    const {
      searchList,
      bookList,
      bookMoveToShelve,
      removeSearchList
    } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search" onClick={removeSearchList}>
              Close
            </button>
          </Link>
          <input
            type="text"
            value={this.state.value}
            placeholder="Search"
            onChange={this.handleChange}
            autoFocus
          />
        </div>
        <SearchList
          searchList={searchList}
          bookList={bookList}
          bookMoveToShelve={bookMoveToShelve}
          removeSearchList={removeSearchList}
        />
      </div>
    );
  }
}

export default SearchBooks;
