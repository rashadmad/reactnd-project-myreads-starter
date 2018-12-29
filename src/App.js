import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'

// import pages
import { Route } from 'react-router-dom'
import Home from "./components/pages/Home.js";
import Search from "./components/pages/Search.js";
// import components
import Book from "./components/Book/Book.js";
import Shelf from "./components/Shelf/Shelf.js";

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={ Search } />
        <Route exact path="/" component={ Home } />
      </div>
    );
  }
}

export default BooksApp
