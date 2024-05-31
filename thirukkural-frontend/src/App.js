import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [kural, setKural] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:8000/api/random-kural/')
      .then(response => {
        setKural(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Thirukkural of the Day</h1>
        {kural ? (
          <div>
            <h2>Couplet {kural.number}</h2>
            <p>{kural.couplet}</p>
            <p><em>{kural.meaning}</em></p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </header>
    </div>
  );
}

export default App;
