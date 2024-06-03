import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContentContainter(){
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
    <div className='page'>
      <header>
        <div className='toggle'>
        <button onClick={toggleLang}>{lang.en ? "தமிழ்" : "English"}</button>
        </div>
        <h1 className='heading'>{lang.en ? "Thirukkural of the Day" : "இன்றைய திருக்குறள்"}</h1>
        {kural ? (
          <div className="main-content">
            {lang.en ? (
            <div className="kural-content">
            <h2>Section: {kural.section_en}</h2>
            <h2>Chapter:{kural.chapter_en}</h2>
            <h2>Couplet: {kural.number}</h2>
            <p className='kural'>{kural.couplet_en}</p>
            <p>Meaning:</p>
            <p><em>{kural.meaning_en}</em></p>
            </div>
            ) : (
            <div className="kural-content">
            <h2>பால்: {kural.section}</h2>
            <h2>அதிகாரம்:{kural.chapter}</h2>
            <h2>குறள்: {kural.number}</h2>
            <div className='kural'>
            <p>{kural.couplet_tamil1}</p>
            <p>{kural.couplet_tamil2}</p>
            </div>
            <p>பொருள்:</p>
            <p><em>{kural.meaning_tamil}</em></p>
            </div>
            )} 
          </div>
        ) : (
          <p className="main-content">{lang.en ? "Loading..." : "குறள் கிடைக்கும் வரை காத்திருங்கள்"}</p>
        )}
      </header>
    </div>
  );
}
export default ContentContainter;
