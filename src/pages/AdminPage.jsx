import { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [count, setCount] = useState(0);

  const fetchCount = async () => {
    try {
      const res = await axios.get(`${API}/count`);
      setCount(res.data);
    } catch (err) {
      console.error('Error fetching count:', err);
    }
  };

  const handleIncrement = async () => {
    try {
      const res = await axios.post(`${API}/entry`);
      setCount(res.data);
      alert('Entry successful');
    } catch (err) {
      console.error('Error entering:', err);
    }
  };

  const handleDecrement = async () => {
    try {
      const res = await axios.post(`${API}/exit`);
      setCount(res.data);
      alert('Exit successful');
    } catch (err) {
      console.error('Error exiting:', err);
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: 40 }}>
      <h1>Current Count: {count}</h1>
      <button
        onClick={handleIncrement}
        style={{
          marginRight: 20,
          padding: '20px 40px',
          fontSize: '24px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Entry
      </button>
      <button
        onClick={handleDecrement}
        style={{
          padding: '20px 40px',
          fontSize: '24px',
          backgroundColor: '#f44336',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
      >
        Exit
      </button>
    </div>
  );
}

export default App;
