import React, { useEffect, useState } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuoteCard';
import QuoteButton from './components/QuoteButton';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

function App() {
  const [quoteText, setQuoteText] = useState('');
  const [quoteAuthor, setQuoteAuthor] = useState('');
  const [liked, setLiked] = useState(false);
  const [fontSize, setFontSize] = useState('18px');
  const [theme, setTheme] = useState('light');

const fetchQuote = async () => {
  try {
    const url = `https://api.allorigins.win/get?url=${encodeURIComponent("https://zenquotes.io/api/random")}&timestamp=${new Date().getTime()}`;
    const response = await axios.get(url);
    const parsedData = JSON.parse(response.data.contents)[0];
    console.log("Fetched quote:", parsedData);
    setQuoteText(parsedData.q);
    setQuoteAuthor(parsedData.a);
    setLiked(false);
  } catch (error) {
    console.error("Error fetching quote:", error);
  }
};


  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className={`app ${theme}`}>
      <h1>🧠 QuoteSage</h1>

      <ThemeToggle theme={theme} setTheme={setTheme} />

      <label>
        Font Size:
        <select value={fontSize} onChange={(e) => setFontSize(e.target.value)}>
          <option value="16px">Small</option>
          <option value="18px">Medium</option>
          <option value="22px">Large</option>
        </select>
      </label>

      <QuoteCard
        quote={quoteText}
        author={quoteAuthor}
        fontSize={fontSize}
        theme={theme}
        liked={liked}
        setLiked={setLiked}
      />

      <QuoteButton text="New Quote" onClick={fetchQuote} />
    </div>
  );
}

export default App;
