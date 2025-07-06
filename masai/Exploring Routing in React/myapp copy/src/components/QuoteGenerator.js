import React, { useEffect, useState } from 'react';
import '../style/QuoteGenerator.css';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchQuote = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.quotable.io/random');
      const data = await res.json();
      setQuote(data);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
    setLoading(false);
  };

  // Fetch quote on mount and every 30 seconds
  useEffect(() => {
    fetchQuote(); // Initial fetch
    const interval = setInterval(fetchQuote, 30000); // 30s interval

    return () => clearInterval(interval); // Clean up
  }, []);

  return (
    <div className="app-container">
      <h1>Daily Quote Generator</h1>
      <div className={`quote-box ${loading ? 'fade-out' : 'fade-in'}`}>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          quote && (
            <>
              <p className="quote">"{quote.content}"</p>
              <p className="author">- {quote.author}</p>
            </>
          )
        )}
      </div>
      <button onClick={fetchQuote} disabled={loading}>
        {loading ? 'Loading...' : 'Get New Quote'}
      </button>
    </div>
  );
};

export default QuoteGenerator;
