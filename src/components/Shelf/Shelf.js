import React from 'react';
import Book from '../Book/Book.js';

class Shelf extends React.Component {

  render() {
    return (
      <div className="bookshelf">
      <h2 className="bookshelf-title">{this.props.type}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            this.props.book.map((book, key) => <Book updateBook={this.props.updateBook} book={book} key={key}/>)
          }
        </ol>
      </div>
    </div>)
  }
}

export default Shelf;
