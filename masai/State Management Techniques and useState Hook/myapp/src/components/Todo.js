import React, { useState } from 'react';
import '../styles/Todo.css'; 

const Todo = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === '') return; // Prevent adding empty tasks
    setTasks([...tasks, { text: task, completed: false }]);
    setTask('');
  };

  const markComplete = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <span
              style={{
                textDecoration: t.completed ? 'line-through' : 'none',
                flex: 1,
              }}
            >
              {t.text}
            </span>
            <button onClick={() => markComplete(index)}>
              {t.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(index)} style={{ marginLeft: '5px' }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
