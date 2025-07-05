import React, { useState } from 'react';

const TodoList = () => {
  const [tasks, setTasks] = useState(["Buy milk", "Study React"]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask.trim()]);
    setNewTask('');
  };

  const clearAll = () => {
    setTasks([]);
  };
  const buttonStyle = {
  padding: '8px 12px',
  marginLeft: '5px',
  backgroundColor: 'skyblue',
  border: 'none',
  cursor: 'pointer',
};


  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '30px', fontFamily: 'Arial' }}>
      <h2>Basic Todo List App</h2>

      <div>
        <input
          type="text"
          placeholder="Enter new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ padding: '8px', width: '70%', marginRight: '5px' }}
        />
        <button onClick={addTask} style={buttonStyle}>Add</button>
        <button onClick={clearAll} style={{ ...buttonStyle, backgroundColor: 'tomato' }}>
          Clear All
        </button>
      </div>

      <ul style={{ marginTop: '20px' }}>
        {tasks.length === 0 ? (
          <p style={{ color: 'gray', fontStyle: 'italic' }}>No tasks available.</p>
        ) : (
          tasks.map((task, index) => (
            <li key={index} style={{ marginBottom: '8px' }}>{task}</li>
          ))
        )}
      </ul>
    </div>
  );
};


export default TodoList;
