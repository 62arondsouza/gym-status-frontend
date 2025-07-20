// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import MembersPage from './pages/MembersPage';
import ProtectedAdmin from './pages/ProtectedAdmin';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MembersPage />} />
        <Route path="/admin" element={<ProtectedAdmin />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);