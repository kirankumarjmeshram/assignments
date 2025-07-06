import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';

const Settings = () => {
  const { user, updateUser } = useContext(UserContext);
  const [formData, setFormData] = useState({ name: user.name, email: user.email });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser(formData);
    alert('User data updated!');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Settings</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div style={{ marginTop: '0.5rem' }}>
          <label>Email: </label>
          <input name="email" value={formData.email} onChange={handleChange} />
        </div>
        <button type="submit" style={{ marginTop: '1rem' }}>Update</button>
      </form>
    </div>
  );
};

export default Settings;
