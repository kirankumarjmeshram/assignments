import React, { useState } from 'react';

function DynamicEmailForm() {
  const [emails, setEmails] = useState(['']);
  const [errors, setErrors] = useState(['']);

  // Regex to validate email format
  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleAddEmail = () => {
    setEmails([...emails, '']);
    setErrors([...errors, '']);
  };

  const handleEmailChange = (index, value) => {
    const newEmails = [...emails];
    newEmails[index] = value;
    setEmails(newEmails);

    const newErrors = [...errors];
    newErrors[index] = isValidEmail(value) ? '' : 'Invalid email';
    setErrors(newErrors);
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h3>Dynamic Email Form</h3>
      <form>
        {emails.map((email, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(index, e.target.value)}
              placeholder={`Email ${index + 1}`}
              style={{ padding: '8px', width: '100%' }}
            />
            {errors[index] && (
              <div style={{ color: 'red', fontSize: '12px' }}>{errors[index]}</div>
            )}
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddEmail}
          style={{ padding: '8px 12px', marginTop: '10px' }}
        >
          Add Email
        </button>
      </form>

      <hr />

      <div>
        <h4>Entered Emails:</h4>
        <ul>
          {emails.map((email, index) => (
            <li key={index}>{email || <i style={{ color: 'gray' }}>Empty</i>}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DynamicEmailForm;
