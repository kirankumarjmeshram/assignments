import React from 'react';

function UserCard({ name, email, city }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      borderRadius: '8px',
      padding: '1rem',
      marginBottom: '1rem',
      maxWidth: '400px',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>City: {city}</p>
    </div>
  );
}

export default UserCard;
