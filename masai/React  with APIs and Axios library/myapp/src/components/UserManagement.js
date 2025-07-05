import React, { useEffect, useState } from 'react';
import axios from 'axios';

const firebaseURL = 'https://your-firebase-db.firebaseio.com/users';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editingUserId, setEditingUserId] = useState(null);
  const [error, setError] = useState('');

  // Utility to validate email
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Fetch Users
  const fetchUsers = async () => {
    try {
      const res = await axios.get(`${firebaseURL}.json`);
      if (res.data) {
        const parsed = Object.entries(res.data).map(([id, user]) => ({
          id,
          ...user,
        }));
        setUsers(parsed);
      } else {
        setUsers([]);
      }
      setError('');
    } catch (err) {
      setError('Failed to fetch users.');
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError('');
  };

  // Add or Update User
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email } = formData;

    if (!name || !email) {
      setError('Both name and email are required.');
      return;
    }

    if (!isValidEmail(email)) {
      setError('Invalid email format.');
      return;
    }

    try {
      if (editingUserId) {
        await axios.patch(`${firebaseURL}/${editingUserId}.json`, formData);
        setEditingUserId(null);
      } else {
        await axios.post(`${firebaseURL}.json`, formData);
      }
      setFormData({ name: '', email: '' });
      fetchUsers();
    } catch (err) {
      setError('Error saving user.');
      console.error(err);
    }
  };

  // Delete User
  const handleDelete = async (id) => {
    try {
      await axios.delete(`${firebaseURL}/${id}.json`);
      fetchUsers();
    } catch (err) {
      setError('Error deleting user.');
      console.error(err);
    }
  };

  // Start Editing
  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setFormData({ name: user.name, email: user.email });
    setError('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h2>User Management</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: '8px', marginRight: '10px', width: '45%' }}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ padding: '8px', marginRight: '10px', width: '45%' }}
        />
        <button type="submit" style={{ padding: '8px 12px' }}>
          {editingUserId ? 'Update' : 'Add'}
        </button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.map((user) => (
          <li
            key={user.id}
            style={{
              marginBottom: '12px',
              padding: '10px',
              border: '1px solid #ccc',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div>
              <strong>{user.name}</strong> — {user.email}
            </div>
            <div>
              <button
                onClick={() => handleEdit(user)}
                style={{ marginRight: '8px' }}
              >
                Edit
              </button>
              <button onClick={() => handleDelete(user.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
