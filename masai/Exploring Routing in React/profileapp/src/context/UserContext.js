import React, { createContext, useState } from 'react';

export const UserContext = createContext();

const mockUser = {
  name: 'John Doe',
  email: 'john@example.com',
};

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(mockUser);

  const updateUser = (newData) => {
    setUser((prev) => ({ ...prev, ...newData }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};
