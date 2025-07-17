// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AdminPage from "./pages/AdminPage";
import MembersPage from './pages/MembersPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<AdminPage />} />              {/* Admin */}
        <Route path="/" element={<MembersPage />} /> {/* Read-only */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);