import React, { Component } from 'react';
import Shelf from "../Shelf/Shelf.js";
import Book from "../Book/Book.js";
import { Link } from 'react-router-dom';

class Home extends Component {
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
