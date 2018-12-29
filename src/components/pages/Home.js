import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// API
import * as BooksAPI from '../../BooksAPI';

import Shelf from "../Shelf/Shelf.js";
import Book from "../Book/Book.js";

class Home extends React.Component {
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

  render() {
    return (<div className="list-books">
        <Shelf type="Currently reading" books={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
        <Shelf type="Want to read" books={this.state.books.filter(b => b.shelf === "wantToRead")}/>
        <Shelf type="Read" books={this.state.books.filter(b => b.shelf === "read")}/>
      <div className="open-search">
        <Link to="/Search">
          <button>Search books</button>
        </Link>
      </div>
    </div>)
  }
}

export default Home;
