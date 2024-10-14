import React, { useState, useEffect } from "react";

function BookEdit({ onEditBook, book }) { 
  const [title, setTitle] = useState(book.title);
  const [writer, setWriter] = useState(book.writer);
  const [price, setPrice] = useState(book.price);

  const handleSubmit = (event) => {
    event.preventDefault();

    const updatedBook = {
      id: book.id,
      title,
      writer,
      price: parseFloat(price) || 0,
    };

    onEditBook(updatedBook);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputTitle">Title</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputWriter">Writer</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputWriter"
            value={writer}
            onChange={(e) => setWriter(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPrice">Price</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputPrice"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Modifier
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
