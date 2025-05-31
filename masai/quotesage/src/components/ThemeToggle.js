import React from 'react';

function ThemeToggle({ theme, setTheme }) {
  return (
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} className="theme-toggle">
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  );
}

export default ThemeToggle;
