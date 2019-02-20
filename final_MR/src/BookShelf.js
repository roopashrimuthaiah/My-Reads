import React from 'react'

import './App.css'
import BookDetails from './BookDetails.js'

const BookShelf=(props)=>{

return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{props.shelfTitle}</h2>
    <div className="bookshelf-books">
        <ol className="books-grid">
            {
               props.bookList.map((book) => {
                    return <li key={book.id}>
                        <BookDetails book={book} onBookChange={props.onBookChange}/>
                    </li>
                }) 
            }
        </ol>
    </div>
</div> 
)

}
export default BookShelf