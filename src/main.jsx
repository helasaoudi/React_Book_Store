// main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BookApp from './Book_Managment/BookApp.jsx'; // Vérifiez que le chemin est correct
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BookApp />
  </StrictMode>,
);
