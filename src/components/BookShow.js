import React, { useState } from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/hook-Books-Context";

const BookShow = ({ book }) => {
  const {editBook, deleteBook} = useBooksContext();
  const [isEdit, setIsEdit] = useState(false);
  const handleClickDelete = () => {
    deleteBook(book.id);
  };
  const handleClickEdit = () => {
    setIsEdit(!isEdit);
  };
  const editBook1 = (title) => {
    editBook(book.id, title);
    setIsEdit(!isEdit);
  };
  let content = <h2>{book.title}</h2>;
  if (isEdit) {
    content = <BookEdit book={book} onEdit={editBook1} />;
  }
  return (
    <div id={`book-id-${book.id}`} className="book-item">
      {/* {count} */}
      <div className="">
    
        <button className="edit" onClick={handleClickEdit}>
          edit
        </button>
        <button className="delete" onClick={handleClickDelete}>
          delete
        </button>
      </div>
      <img alt="book" src={`https://picsum.photos/seed/${book.id}/200/300`} />
      {content}
    </div>
  );
};

export default BookShow;
