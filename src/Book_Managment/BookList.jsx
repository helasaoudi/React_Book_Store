import React from "react";
import { FaEdit, FaTrashAlt } from 'react-icons/fa'; 

function BookCard({ book, onDeleteBook, onEditBook }) {
    return (
        <div className="card" style={{ width: "18rem", margin: "10px" }}>
            <img src={book.image} className="card-img-top" alt={book.title} style={{ height: "250px", objectFit: "cover" }} />
            <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">Auteur : {book.writer}</p>
                <p className="card-text">Prix : {book.price ? book.price.toFixed(2) : "N/A"} DTN</p>
                <div style={{ marginTop: "10px" }}>
                    <FaEdit onClick={() => onEditBook(book)} style={{ cursor: "pointer", marginRight: "10px", color: "blue" }} title="Modifier" />
                    <FaTrashAlt onClick={() => onDeleteBook(book.id)} style={{ cursor: "pointer", color: "red" }} title="Supprimer" />
                </div>
            </div>
        </div>
    );
}

export default function BookList({ books, onDeleteBook, onEditBook }) {
    return (
        <div className="d-flex flex-wrap">
            {books.map((book) => (
                <BookCard key={book.id} book={book} onDeleteBook={onDeleteBook} onEditBook={onEditBook} /> 
            ))}
        </div>
    );
}
