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


  render() {
    return (
      <div>
        <Route exact path="/" component={ Home } />
        <Route exact path="/search" component={ Search } />
      </div>
    );
  }
}

export default BooksApp
