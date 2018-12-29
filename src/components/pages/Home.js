import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// API
import * as BooksAPI from '../../BooksAPI';

import Shelf from "../Shelf/Shelf.js";
import book from "../Book/Book.js";

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  componentDidMount(){
    BooksAPI.getAll()
    .then(resp => {
      console.log(resp);
      this.setState({books: resp});
    });
  }

    render() {
      return (
            <div className="list-books">
              <Shelf type="Currently reading"/>
              <Shelf type="Want to read"/>
              <Shelf type="Read"/>
              <div className="open-search">
                <Link to="/Search">
                  <button>Search books</button>
                </Link>
              </div>
            </div>
        )
    }
}

export default Home;
