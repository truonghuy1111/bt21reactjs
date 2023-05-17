import React, { createContext, useState } from "react";
import axios from "axios";
const BooksContext = createContext();
const Provider = ({children}) => {

   const [books, setBooks] = useState([]);
   const valueToShare = {
      books,
      createBook: async (title) => {
         const res = await axios.post("http://localhost:3001/books", {
           title,
         });
         const updatedBooks = [...books, res.data];
         setBooks(updatedBooks);
       },
      editBook: async (id, title) => {
         const response = await axios.put(`http://localhost:3001/books/${id}`, {
           title,
         });
         const updatedBooks = books.map((book) => {
           if (book.id === id) return { id: book.id, title };
           else return book;
         });
         setBooks(updatedBooks);
       },
      deleteBook: async (id) => {
         await axios.delete(`http://localhost:3001/books/${id}`);
         const updatedBooks = books.filter((book) => book.id !== id);
         setBooks(updatedBooks);
       },
     
      fetchBooks: async () => {
         console.log("test");
         const response = await axios.get("http://localhost:3001/books");
         setBooks(response.data);
       }
     
   };
   return <BooksContext.Provider value={valueToShare}>{children}</BooksContext.Provider>
};

export {Provider};
export default BooksContext;