// src/pages/MemberPage.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

function MemberPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const res = await axios.get(`${API}/count`);
        setCount(res.data);
      } catch (err) {
        console.error('Error fetching count:', err);
      }
    };

    fetchCount();

    const interval = setInterval(fetchCount, 5000); // Auto-refresh every 5s (optional)
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: 40 }}>
      <h1>Welcome Gym Member</h1>
      <h2>Current People in Gym: {count}</h2>
    </div>
  );
}

export default MemberPage;
