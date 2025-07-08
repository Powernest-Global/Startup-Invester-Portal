import React, { useEffect, useState } from 'react';

function App() {
  const [helloMessage, setHelloMessage] = useState('Loading...');

  const apiUrl = process.env.REACT_APP_API_URL || '';

  useEffect(() => {
    fetch(`${apiUrl}/api/hello`)  // ✅ Now relative path, works with Nginx proxy
      .then(res => res.json())
      .then(data => setHelloMessage(data.message))
      .catch(err => {
        console.error('Error:', err);
        setHelloMessage('Failed to load message');
      });
  }, []);

  return (
    <div>
      <h1>Fullstack Docker Demo</h1>
      <p>Message from backend: {helloMessage}</p>
    </div>
  );
}

export default App;
