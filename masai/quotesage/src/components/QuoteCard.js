import React from 'react';

function QuoteCard({ quote, author, fontSize, theme, liked, setLiked }) {
  return (
    <div className={`quote-card ${theme}`}>
      {quote ? (
        <>
          <p style={{ fontSize }}>{quote}</p>
          <h4>- {author}</h4>
          <button onClick={() => setLiked(!liked)} className="like-button">
            {liked ? '❤️' : '🤍'}
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default QuoteCard;
