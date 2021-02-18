import React from "react";

class BookMoveToShelf extends React.Component {
  state = {
    value: this.props.shelf
  };

  shelveChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.bookMoveToShelve(this.props.book, event.target.value);
  };

  render() {
    return (
      <div className="book-shelf-changer">
        <select value={this.state.value} onChange={this.shelveChange}>
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookMoveToShelf;
