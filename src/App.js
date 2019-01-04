import React from 'react'
import './App.css'

// import pages
import { Route } from 'react-router-dom'
import HomePage from "./components/pages/HomePage.js";
import SearchPage from "./components/pages/SearchPage.js";


class BooksApp extends React.Component {


  render() {
    return (
      <div>
        <Route exact path="/" component={ HomePage } />
        <Route exact path="/search" component={ SearchPage } />
      </div>
    );
  }
}

export default BooksApp
