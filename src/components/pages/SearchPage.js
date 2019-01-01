import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Book from "../Book/Book.js";
// API
import * as BooksAPI from '../../BooksAPI';

import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'

class SearchPage extends React.Component {
  /* creates the state for books and results */
   constructor(props) {
      super(props);
      this.state = {
         books: [],
         bookTitles: [],
         results: [],
         query: ""
      }
   }
   /* adds book data to books array and to the state */
   componentDidMount() {
      BooksAPI.getAll()
      .then(resp => {
         this.setState({books:resp});
      })
   }
   /* Search field  */
   updateQuery = (query) => {
      this.setState({query: query}, this.submitSearch);
   }
   /* adds book data to books and the state */
   submitSearch() {
      if(this.state.query === '' || this.state.query === undefined) {
         return this.setState({ results: [] })
      }
      BooksAPI.search(this.state.query.trim()).then(res => {
        {/* error handleing */}
         if(res.error) {
            return this.setState({results: [] })
         } else {
            res.forEach(b => {
               let filteredBookTitles = this.state.bookTitles.filter(B => B.title === b.title)
               if(filteredBookTitles[0]) { b.shelf = filteredBookTitles[0].shelf }
            });
            return this.setState({results: res })
         }
      })
   }
   updateBook = (book, shelf) => {
     BooksAPI.update(book, shelf)
     .then(resp => {
       book.shelf = shelf;
       this.setState(state => ({
         books: state.books.filter(b => b.id !== book.id).concat({book})
       }));
     });
   }

    render() {
        return (
          <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(event) => this.updateQuery(event.target.value)} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  this.state.results.map((book, key) => <Book updateBook={this.updateBook} book={book} key={key} />)
                }
              </ol>
            </div>
          </div>
        );
    }
}

export default SearchPage;
