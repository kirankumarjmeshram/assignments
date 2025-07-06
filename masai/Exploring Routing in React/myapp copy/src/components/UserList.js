import React, { useEffect, useState } from 'react';
import UserCard from './UserCard';

function UserList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Failed to fetch user data.');
        }
        return res.json();
      })
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>User Profiles</h1>
      <input
        type="text"
        placeholder="Search by name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '0.5rem', marginBottom: '1rem', width: '300px' }}
      />

      {loading && <p>Loading users...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <>
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <UserCard
                key={user.id}
                name={user.name}
                email={user.email}
                city={user.address.city}
              />
            ))
          ) : (
            <p>No users found.</p>
          )}
        </>
      )}
    </div>
  );
}

export default UserList;
