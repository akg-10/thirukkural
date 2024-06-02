import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [kural, setKural] = useState(null);
  const [lang, setLang] = useState(
    {
      en: false
    }
  );

  function toggleLang(){
    if (lang.en) {
      setLang(
        {
          en: false
        }
      ) 
    } else {
      setLang({
        en: true
      })
    }
    
  }

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
        <div>
        <button onClick={toggleLang}>{lang.en ? "தமிழ்" : "English"}</button>
        </div>
        <h1>{lang.en ? "Thirukkural of the Day" : "இன்றைய திருக்குறள்"}</h1>
        {kural ? (
          <div>
            {lang.en ? (
            <div>
            <h2>Couplet: {kural.number}</h2>
            <p>{kural.couplet_en}</p>
            <p><em>{kural.meaning_en}</em></p>
            </div>
            ) : (
            <div>
            <h2>குறள்: {kural.number}</h2>
            <p>{kural.couplet_tamil}</p>
            <p><em>{kural.meaning_tamil}</em></p>
            </div>
            )} 
          </div>
        ) : (
          <p>{lang.en ? "Loading..." : "குறள் கிடைக்கும் வரை காத்திருங்கள்"}</p>
        )}
      </header>
    </div>
  );
}

export default App;
