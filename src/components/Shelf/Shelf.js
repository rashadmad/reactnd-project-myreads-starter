import React, {Component} from 'react';
import Book from '../Book/Book.js';

class Shelf extends Component {
  componentDidMount() {console.log(this)}

  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.type}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
              {this.props.books.map((book, key) => <Book book={book} key={key}/>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf;
