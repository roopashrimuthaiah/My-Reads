import React from 'react'
import {Link} from 'react-router-dom'
import './App.css'
import BookShelf from './BookShelf.js'

const BookList=(props)=>{
return (
 <div className="list-books">
            <div className="list-books-content">
              <div>
              <BookShelf shelfTitle='Currently Reading:' bookList={props.currentlyReading} 
                  onBookChange={props.onBookChange}/>
              <BookShelf shelfTitle='Want To Read:' bookList={props.wantToRead}
                   onBookChange={props.onBookChange}/>
              <BookShelf shelfTitle='Read:' bookList={props.read} 
                   onBookChange={props.onBookChange}/>
              </div>
             </div>
             <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
</div>
);

}
export default BookList