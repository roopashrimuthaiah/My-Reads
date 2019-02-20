import React from 'react'
import './App.css'

class BookDetails extends React.Component{
onBookOptionChange = (e) => {
const statusChange = e.target.value;
console.log(statusChange);
console.log("statusChange", this.props.book);
this.props.onBookChange(this.props.book, statusChange);
};
render(){
return (
  <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, 
                              backgroundImage: (this.props.book.imageLinks) ? `url(${this.props.book.imageLinks.thumbnail})`
                                : `url(${'icons/no_image_available'})` }} />
                              
                            <div className="book-shelf-changer">
                               <select onChange={this.onBookOptionChange} defaultValue={this.props.book.shelf||"none"}>
                                <option  disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{this.props.book.title}</div>
                          <div className="book-authors">{this.props.book.authors}</div>
</div>
);
}
}
export default BookDetails