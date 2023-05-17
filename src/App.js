import BookCreate from "./components/BookCreate";
import React from "react";
import { useEffect } from "react";
import BookList from "./components/BookList";
import "./style.css";
import useBooksContext from "./hooks/hook-Books-Context";

const App = () => {
  const {fetchBooks} = useBooksContext();
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      <BookList />
      <BookCreate/>
    </div>
  );
};

export default App;
