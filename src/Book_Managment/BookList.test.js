import { render, screen, fireEvent } from '@testing-library/react';
import BookList from './BookList';
import React from 'react';
import '@testing-library/jest-dom';


const books = [
  { id: 1, title: "Rich Dad Poor Dad", writer: "Robert Kiyosaki", price: 15, image: "image_url" },
  { id: 2, title: "To Kill a Mockingbird", writer: "Harper Lee", price: 7.99, image: "image_url" },
];

test('renders book list correctly', () => {
  render(<BookList books={books} onDeleteBook={() => {}} onEditBook={() => {}} />);
  
  // Vérifie que les titres des livres sont rendus
  expect(screen.getByText(/Rich Dad Poor Dad/i)).toBeInTheDocument();
  expect(screen.getByText(/To Kill a Mockingbird/i)).toBeInTheDocument();
});

test('handles delete action', () => {
  const handleDelete = jest.fn();
  render(<BookList books={books} onDeleteBook={handleDelete} onEditBook={() => {}} />);
  
  // Simuler un clic sur le bouton de suppression du premier livre
  const deleteButton = screen.getAllByTitle(/Supprimer/i)[0]; // Récupère le premier bouton "Supprimer"
  fireEvent.click(deleteButton);
  
  // Vérifie que la fonction onDeleteBook a été appelée avec l'ID du premier livre
  expect(handleDelete).toHaveBeenCalledWith(1);
});
