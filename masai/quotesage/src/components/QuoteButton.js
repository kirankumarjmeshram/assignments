import React from 'react';

function QuoteButton({ text, onClick }) {
  return (
    <button onClick={onClick} className="quote-button">
      {text}
    </button>
  );
}

export default QuoteButton;
