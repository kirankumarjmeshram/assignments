import React, { useRef } from 'react';

function UncontrolledForm() {
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = inputRef.current.value;
    alert(`Submitted: ${value}`);
    inputRef.current.value = ''; // Clear the input
  };

  return (
    <div style={{ maxWidth: '300px', margin: '50px auto', fontFamily: 'Arial' }}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label><br />
        <input
          id="username"
          type="text"
          ref={inputRef}
          style={{ width: '100%', padding: '8px', marginTop: '5px' }}
        />
        <button type="submit" style={{ marginTop: '10px', padding: '8px 12px' }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UncontrolledForm;
