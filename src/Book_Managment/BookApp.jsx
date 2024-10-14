import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import BookList from "./BookList"; 
import BookAdd from "./BookAdd";
import BookEdit from "./BookEdit"; // Importez le composant BookEdit
import { Modal, Button } from 'react-bootstrap'; 

const initList = [
    { id: 1, title: "Rich Dad Poor Dad", price: 15, writer: "Robert Kiyosaki", image: "/public/71W57+-AtnL._AC_UF1000,1000_QL80_.jpg" },
    { id: 2, title: "To Kill a Mockingbird", price: 7.99, writer: "Harper Lee", image: "/81QuEGw8VPL._AC_UF1000,1000_QL80_.jpg" },
    { id: 3, title: "The Great Gatsby", price: 10.99, writer: "F. Scott Fitzgerald", image: "/public/9781849908467-jacket-large.jpg" },
    { id: 4, title: "Moby Dick", price: 8.99, writer: "Herman Melville", image: "/public/images.jpg" },
    { id: 5, title: "War and Peace", price: 12.99, writer: "Leo Tolstoy", image: "/public/Moby_Dick_1.jpg" },
];

export default function BookApp() {
    const [books, setBooks] = useState(initList);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [currentBook, setCurrentBook] = useState(null); // Pour gérer le livre en cours d'édition

    const handleDelete = (id) => {
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
    };

    const handleAddBook = (newBook) => {
        setBooks([...books, newBook]);
        handleCloseAddModal();
    };

    const handleEditBook = (updatedBook) => {
        const updatedBooks = books.map(book => (book.id === updatedBook.id ? updatedBook : book));
        setBooks(updatedBooks);
        handleCloseEditModal();
    };

    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowAddModal = () => setShowAddModal(true);

    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowEditModal = (book) => {
        setCurrentBook(book); // Définit le livre actuel à modifier
        setShowEditModal(true);
    };

    return (
        <BrowserRouter>
            <div>
                <h1>Liste des Livres</h1>
                <Button variant="primary" onClick={handleShowAddModal}>
                    Ajouter un livre
                </Button>
                <Routes>
                    <Route path="/" element={<BookList books={books} onDeleteBook={handleDelete} onEditBook={handleShowEditModal} />} />
                </Routes>
                
                {/* Modal pour ajouter un livre */}
                <Modal show={showAddModal} onHide={handleCloseAddModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ajouter un Livre</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <BookAdd onAddBook={handleAddBook} books={books} />
                    </Modal.Body>
                </Modal>

                {/* Modal pour modifier un livre */}
                <Modal show={showEditModal} onHide={handleCloseEditModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modifier un Livre</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                   {currentBook && <BookEdit onEditBook={handleEditBook} book={currentBook} />} 
                  </Modal.Body>

                </Modal>
            </div>
        </BrowserRouter>
    );
}
