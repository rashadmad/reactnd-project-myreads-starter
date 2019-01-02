import React, { Component } from 'react'

class ListBooks extends Component {
  render() {
    console.log('Right here' + 'Props', this.props)
    return (
        <ol className='books-grid'>
          {this.props.books.map((book) => (
            <li key={book.title} className='list-books-content'>
              {book.author}
            </li>
          ))}
        </ol>
    )
  }
}

export default ListBooks
