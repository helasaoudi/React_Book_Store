import React, { useState } from "react";

function BookAdd({ onAddBook, books }) {  // Ajout de books en props
  const [title, setTitle] = useState("");
  const [writer, setWriter] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    // Trouver l'ID maximum actuel dans la liste des livres
    const lastId = books.length > 0 ? Math.max(...books.map(book => book.id)) : 0;

    // Créer un nouvel objet book
    const newBook = {
      id: lastId + 1,
      title,
      writer,
      price: parseFloat(price) || 0,
    };

    console.log("Title:", title);
    console.log("Writer:", writer);
    console.log("Price:", price);
    console.log("new book", newBook);

    // Appel de la fonction pour ajouter le nouveau livre
    onAddBook(newBook);
    
    // Réinitialise les champs du formulaire
    setTitle("");
    setWriter("");
    setPrice("");
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
            placeholder="Enter the title of the Book"
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
            placeholder="The name of the Writer"
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
            placeholder="Enter the price in DTN"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default BookAdd;
