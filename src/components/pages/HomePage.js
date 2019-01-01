import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// API
import * as BooksAPI from '../../BooksAPI';

import Shelf from "../Shelf/Shelf.js";
import Book from "../Book/Book.js";

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    BooksAPI.getAll().then(resp => {
      console.log(resp);
      this.setState({books: resp});
    });
  }

  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(resp => {
      book.shelf = shelf;
      console.log(shelf);
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat([book])
      }));
    });
  }

  render() {
    return (<div className="list-books">
        <Shelf updateBook={this.updateBook} type="Current Reads" book={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
        <Shelf updateBook={this.updateBook} type="Want to read" book={this.state.books.filter(b => b.shelf === "wantToRead")}/>
        <Shelf updateBook={this.updateBook} type="Read" book={this.state.books.filter(b => b.shelf === "read")}/>
      <div className="open-search">
        <Link to="/Search">
          <button>Search books</button>
        </Link>
      </div>
    </div>)
  }
}

export default HomePage;
