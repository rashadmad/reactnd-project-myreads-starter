import React, {Component} from 'react';
//api


class Book extends Component {
  componentDidMount() {
    console.log(this)
  }

  render() {
    return (
      <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{
              width: 128,
              height: 193,
              /* error handleing for cover image */
              backgroundImage: `url("${this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail : "http://via.placeholder.com/128x193?text=No%20Cover"}")`
            }}>
          </div>
          <div className="book-shelf-changer">
            {/* default value of none, updateBook(book, shelf) this function takes in the value that the users selects */}
            <select value={this.props.book.shelf || "None"} onChange={(choice) => {this.props.updateBook(this.props.book, choice.target.value) }}>
              <option value="move" disabled="disabled">Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        <div className="book-authors">{this.props.book.authors ? this.props.book.authors[0] : "Author unknown"}</div>
      </div>
    </li>);
  }
}

export default Book;
