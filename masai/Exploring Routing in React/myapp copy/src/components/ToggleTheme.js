import React, { useState, useEffect } from 'react';
import '../style/ToggleTheme.css';

const ThemedBox = ({ theme, children }) => {
  const styles = {
    light: {
      backgroundColor: '#f0f0f0',
      color: '#333',
      border: '1px solid #ccc',
    },
    dark: {
      backgroundColor: '#333',
      color: '#f0f0f0',
      border: '1px solid #555',
    },
  };

  return (
    <div className="themed-box" style={styles[theme]}>
      {children}
    </div>
  );
};

const ToggleTheme = () => {
  const [theme, setTheme] = useState('light');

  // Load theme from localStorage on initial render
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Store theme in localStorage on theme change
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${theme}`}>
      <h1>Theme Toggle App</h1>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>

      <div className="boxes">
        <ThemedBox theme={theme}>Box 1 Content</ThemedBox>
        <ThemedBox theme={theme}>Box 2 Content</ThemedBox>
        <ThemedBox theme={theme}>Box 3 Content</ThemedBox>
      </div>
    </div>
  );
};

export default ToggleTheme;
