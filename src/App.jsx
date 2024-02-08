import './App.css';
import React, { useState, useEffect } from 'react';

const App = () => {
  const [quotes, setQuotes] = useState('');

  const getQuote = () => {
    fetch("https://api.quotable.io/random?maxLength=100")
      .then(res => res.json())
      .then(data => {
        setQuotes(data)
      })
  }

  useEffect(() => {
    getQuote();
  }, [])
  return (
    <div>
      <div className="container">
        <div className="wrapper">
          <div className="quotesect">
            <div className="quotes">
              <h1 className="text">
                {quotes.content}
              </h1>
              <div className="author">
                <p className="writer">Author</p>
                <p className="writer-name">{quotes.author}</p>
              </div>
            </div>
          </div>
          <div className="nextsect">
            <div className="empty" onClick={() => {
              window.open(
                `https://twitter.com/intent/tweet?text=${quotes.content}`,
                '_blank',
                'noopener noreferrer'
              );
            }}>
            </div>
            <div className="next" onClick={getQuote}>
              <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                <path fill="black" d="M4 12h12.25L11 6.75l.66-.75l6.5 6.5l-6.5 6.5l-.66-.75L16.25 13H4z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
