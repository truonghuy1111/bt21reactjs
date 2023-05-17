import React from "react";
import BookShow from "./BookShow";
import useBooksContext from "../hooks/hook-Books-Context";
const BookList = () => {
  // const handleEdit = (id, title) => {
  //    onEdit(id,title)
  // }
  const { books } = useBooksContext();
  const listItem = books.map((book) => {
    return (
      // <BookShow  key={book.id} book={book} />
      <BookShow  key={book.id} book={book} />
    );
  });
  return <div className="book-list">{listItem}</div>;
};

export default BookList;
