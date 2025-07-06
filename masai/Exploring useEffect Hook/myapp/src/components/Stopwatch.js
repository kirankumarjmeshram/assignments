import React, { useEffect, useState } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // Optional: replace with your own mp3 sound file if needed
  const beepSound = new Audio('https://www.soundjay.com/button/beep-07.wav');

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 10) {
      // Play the sound or console.log
      beepSound.play().catch(() => console.log('Sound blocked or unavailable'));
      // Alternatively: console.log("⏰ Time's up! 10 seconds reached.");
    }
  }, [seconds]);

  const startStopwatch = () => {
    setIsRunning(true);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
  };

  const resetStopwatch = () => {
    setIsRunning(false);
    setSeconds(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '2rem', fontFamily: 'Arial' }}>
      <h1>⏱️ Stopwatch</h1>
      <h2>{seconds} seconds</h2>

      <button onClick={startStopwatch} disabled={isRunning} style={buttonStyle}>Start</button>
      <button onClick={stopStopwatch} disabled={!isRunning} style={buttonStyle}>Stop</button>
      <button onClick={resetStopwatch} style={buttonStyle}>Reset</button>
    </div>
  );
}

const buttonStyle = {
  margin: '0.5rem',
  padding: '0.5rem 1rem',
  fontSize: '16px',
  cursor: 'pointer'
};

export default Stopwatch;
