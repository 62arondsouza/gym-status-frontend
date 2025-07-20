// src/pages/ProtectedAdmin.jsx
import { useState, useEffect } from 'react';
import AdminPage from './AdminPage';
import LoginPage from './LoginPage';

export default function ProtectedAdmin() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  const handleLogin = () => {
    const newToken = localStorage.getItem('token');
    setToken(newToken);
  };

  if (!token) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return <AdminPage />;
}
