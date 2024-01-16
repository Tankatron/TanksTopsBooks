import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // must provide oath with ./ then file name
import {books} from "./books";
import Book from "./Book";


const BookList = () => {
    return <section className="booklist">
      <h1>David's Top 5 Books</h1>
        {books.map((book, index)=>{
            return (
             <Book {...book} key={book.id} number={index} />
             )
        })}
    </section>
    
}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>)
