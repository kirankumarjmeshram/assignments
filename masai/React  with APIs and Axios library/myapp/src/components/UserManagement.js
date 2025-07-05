import React, { useEffect, useState } from 'react';
import axios from 'axios';

const firebaseURL = 'https://user-management-f51d9-default-rtdb.asia-southeast1.firebasedatabase.app/users';

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [editingUserId, setEditingUserId] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // New loading state

  // Utility to validate email
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Fetch Users
  const fetchUsers = async () => {
    setLoading(true); // Start loading
    try {
      const res = await axios.get(`${firebaseURL}.json`);
      if (res.data) {
        // Transform the Firebase object response into an array for easier rendering
        const parsed = Object.entries(res.data).map(([id, user]) => ({
          id,
          ...user,
        }));
        setUsers(parsed);
      } else {
        setUsers([]); // No data means no users
      }
      setError(''); // Clear any previous errors on successful fetch
    } catch (err) {
      setError('Failed to fetch users. Please check console for details.');
      console.error('Error fetching users:', err);
      // Detailed error for security rule issues:
      if (err.response && err.response.status === 401) {
        setError(prev => prev + ' (Likely a Realtime Database permission issue!)');
      }
    } finally {
      setLoading(false); // End loading
    }
  };

  // Effect hook to fetch users on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setError(''); // Clear error when user starts typing again
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

    setLoading(true); // Start loading for add/update operation
    try {
      if (editingUserId) {
        // PATCH for updating specific fields
        await axios.patch(`${firebaseURL}/${editingUserId}.json`, formData);
        setEditingUserId(null); // Exit editing mode
      } else {
        // POST for creating a new record
        await axios.post(`${firebaseURL}.json`, formData);
      }
      setFormData({ name: '', email: '' }); // Clear form fields
      setError(''); // Clear any previous errors
      await fetchUsers(); // Re-fetch users to update the list
    } catch (err) {
      setError('Error saving user. Please check console for details.');
      console.error('Error saving user:', err);
    } finally {
      setLoading(false); // End loading
    }
  };

  // Delete User
  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this user?')) {
        return; // User cancelled
    }
    setLoading(true); // Start loading for delete operation
    try {
      await axios.delete(`${firebaseURL}/${id}.json`);
      setError(''); // Clear any previous errors
      await fetchUsers(); // Re-fetch users to update the list
    } catch (err) {
      setError('Error deleting user. Please check console for details.');
      console.error('Error deleting user:', err);
    } finally {
      setLoading(false); // End loading
    }
  };

  // Start Editing
  const handleEdit = (user) => {
    setEditingUserId(user.id);
    setFormData({ name: user.name, email: user.email });
    setError(''); // Clear errors when starting edit
  };

  return (
    <div style={{ maxWidth: '600px', margin: '40px auto', fontFamily: 'Arial' }}>
      <h2>Firebase Realtime Database User Management</h2>

      <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          style={{ flex: '1 1 45%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          disabled={loading}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          style={{ flex: '1 1 45%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }}
          disabled={loading}
        />
        <button
          type="submit"
          style={{ flex: '1 1 auto', padding: '8px 12px', background: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px', cursor: loading ? 'not-allowed' : 'pointer' }}
          disabled={loading}
        >
          {editingUserId ? 'Update User' : 'Add User'}
        </button>
        {editingUserId && (
             <button
                type="button"
                onClick={() => { setEditingUserId(null); setFormData({ name: '', email: '' }); setError(''); }}
                style={{ flex: '1 1 auto', padding: '8px 12px', background: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: loading ? 'not-allowed' : 'pointer' }}
                disabled={loading}
            >
                Cancel Edit
            </button>
        )}
      </form>

      {error && <p style={{ color: 'red', marginBottom: '15px', border: '1px solid red', padding: '10px', borderRadius: '4px', background: '#ffe0e0' }}>{error}</p>}
      {loading && <p style={{ textAlign: 'center', color: '#555' }}>Loading...</p>}

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {users.length === 0 && !loading && !error && (
            <li style={{ textAlign: 'center', color: '#777', padding: '20px', border: '1px dashed #ccc', borderRadius: '8px' }}>
                No users found. Add one above!
            </li>
        )}
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
              backgroundColor: editingUserId === user.id ? '#e6ffe6' : 'white', // Highlight editing user
            }}
          >
            <div>
              <strong>{user.name}</strong> <br/> <small>{user.email}</small>
            </div>
            <div>
              <button
                onClick={() => handleEdit(user)}
                style={{ marginRight: '8px', padding: '6px 10px', background: '#2196F3', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                disabled={loading}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(user.id)}
                style={{ padding: '6px 10px', background: '#f44336', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                disabled={loading}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserManagement;
