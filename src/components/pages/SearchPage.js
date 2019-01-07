import React from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from '../../BooksAPI'
import Book from '../Book/Book.js';

class Searchpage extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
           books: [],
           results: [],
           query: ""
        }
     }

     componentDidMount() {
        BooksAPI.getAll()
        .then(resp => {
           this.setState({books:resp});
        })
     }

     updateQuery = (query) => {
       /* Multi line comment*/
        this.setState({query: query}, this.submitSearch);
     }

     submitSearch() {
        /* Multi line comment*/
        if(this.state.query === '' || this.state.query === undefined) {
           return this.setState({ results: [] })
        }
        BooksAPI.search(this.state.query.trim()).then(res => {
           if(res.error) {
              return this.setState({results: [] })
           }
           else {
             
              let filteredResults = res.filter(book => {
                let notShelved = true;
                this.state.books.forEach(shelvedBook => {
                  if (book.id === shelvedBook.id) {
                    notShelved = false;
                  }
                });
                return notShelved;
              })
              return this.setState({results: filteredResults})
           }
        })
     }

     updateBook = (book, shelf) => {
       BooksAPI.update(book, shelf)
       .then(resp => {
         book.shelf = shelf;
         this.setState(state => ({
           books: state.books.filter(b => b.id !== book.id).concat([book])
         }));
       });
     }

    render() {
       return (
          <div className="search-books">
             <div className="search-books-bar">
               <Link className="close-search" to="/">Close</Link>
               <div className="search-books-input-wrapper">
               <input type="text" placeholder="Search by title or author" value={this.state.query}
                 onChange={(event) => this.updateQuery(event.target.value)} />
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

export default Searchpage;
