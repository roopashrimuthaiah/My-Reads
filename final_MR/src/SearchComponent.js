import React from 'react'
import DebounceInput from 'react-debounce-input'
import * as BooksAPI from './BooksAPI'
import {Link} from 'react-router-dom'
import './App.css'
import BookDetails from './BookDetails.js'

class SearchComponent extends React.Component{
constructor(props){
super(props);
this.state={searchOutput:[]}
}
searchBook = (e) => {
        const toBeSearched = e.target.value;
        if (!toBeSearched) {
            this.setState({searchOutput: []});
            return;
        }
        BooksAPI.search(toBeSearched, 20).then(searchOutput => {
            if (searchOutput.error) {
                searchOutput = [];
            }
            searchOutput = searchOutput.map((book) => {
               const bookChecked = this.props.books.find(check => check.id === book.id);
                if (bookChecked) {
                    book.shelf = bookChecked.shelf;
                    console.log("hereeee:", book.shelf);
                }console.log("thisseeee:", book);
                return book;
                
            });
            this.setState({searchOutput});
            console.log("all", searchOutput);
        });
    };
render() {
return (
 <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
              <DebounceInput
  debounceTimeout={1000}
  type="text"
  placeholder="Search by title or author"
  onChange={this.searchBook} />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.searchOutput && this.state.searchOutput.map(book => (
               <li key={book.id}>
                                <BookDetails book={book} onBookChange={this.props.onBookChange}/>
                            </li>
              ))}
              </ol>
            </div>
          </div>
);
}
}
export default SearchComponent
