import React, { useState } from 'react';

function ControlledForm() {
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setUsername(e.target.value);
    setError(''); // clear error while typing
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '') {
      setError('Username cannot be empty.');
    } else {
      alert(`Submitted Username: ${username}`);
      setUsername(''); // reset input
    }
  };

  return (
    <div style={{ maxWidth: '300px', margin: '50px auto', fontFamily: 'Arial' }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br />
        <input
          id="username"
          type="text"
          value={username}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
        {error && <p style={{ color: 'red', marginTop: '5px' }}>{error}</p>}
        <button type="submit" style={{ marginTop: '10px', padding: '8px 12px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ControlledForm;
