import React from 'react'
import * as BooksAPI from './BooksAPI'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import BookList from './BookList.js'
import './App.css'
import SearchComponent from './SearchComponent.js'
class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showSearchPage: false,
    }
}

getBooks(){
  BooksAPI.getAll().then(books => {
    this.setState({books: books, showSearchPage:true})
   
})
}

componentDidMount() {
this.getBooks();
}
onBookChange = (book, statusChange) => {
  BooksAPI.update(book, statusChange)
      .then(
          this.setState((state) => ({
              books: state.books.map(bookData => {
                  if (bookData.id === book.id) {
                      bookData.shelf = statusChange;
                      return bookData
                  } else {
                      return bookData
                  }
              }),
              showSearchPage: true
          })),this.getBooks()
      ) 
};
  render() {
    const dataList=this.state;
   const currentlyReading= dataList.books.filter((book) => book.shelf==='currentlyReading')
const wantToRead= dataList.books.filter((book)=> book.shelf==='wantToRead')
const read= dataList.books.filter((book)=> book.shelf==='read')
    return (
      <div className="app">
      <Router>
        <div>
       <Route exact path="/" render={()=> (
    	<div>
  			<div className="list-books-title">
              <h1>MyReads</h1>
            </div>
    {
    	dataList.showSearchPage ? (
    			<BookList
                  currentlyReading={currentlyReading}
                  wantToRead={wantToRead}
							read={read}
              onBookChange={this.onBookChange}
    			/>
    ): (<div>Loading books.... </div>)
    }
        </div>
  )}/>

<Route path="/search" render={({history}) => (
  <SearchComponent  onBookChange={this.onBookChange}
                        history={history}
                        books={currentlyReading.concat(wantToRead, read)}/>
  )}/>
  </div></Router>
      </div>
    )
  }
}
export default BooksApp