import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from "../Book/Book.js";
import ListBooks from "../Book/ListBooks.js";
// API
import * as BooksAPI from '../../BooksAPI';

import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

const books = [
  {"title": "phony", "author": "mr. phony"},
  {"title": "bra", "author": "lady blu"},
  {"title": "myBook", "author": "Rashad Madison"},
  {"title": "phony", "author": "mr. phony"},
  {"title": "phony", "author": "mr. phony"}
]

class SearchPage extends React.Component {

   // constructor(props) {
   //    super(props);
   //    this.state = {
   //       books: [
   //       ]
   //    }
   // }

    render() {

        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" />
              </div>
            </div>
            <div className="search-books-results">
                <ListBooks books={books} />
            </div>
          </div>
        );
    }
}

export default SearchPage;
