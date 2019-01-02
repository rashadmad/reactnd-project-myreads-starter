import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from "../Book/Book.js";
import ListBooks from "../Book/ListBooks.js";
// API
import * as BooksAPI from '../../BooksAPI';

import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchPage extends React.Component {
  /* creates the state for books and results */
   constructor(props) {
      super(props);
      this.state = {
         books: []
      }
   }

    render() {

        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.query} />
              </div>
            </div>
            <div className="search-books-results">
                <ListBooks />
            </div>
          </div>
        );
    }
}

export default SearchPage;
