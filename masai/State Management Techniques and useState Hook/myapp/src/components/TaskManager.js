import React, { useState } from 'react';
import '../styles/TaskManager.css'; // For visual clarity and highlighting

const priorityOrder = { High: 3, Medium: 2, Low: 1 };

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [filterPriority, setFilterPriority] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const addTask = () => {
    if (title.trim() === '') return;

    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask].sort(
      (a, b) => priorityOrder[b.priority] - priorityOrder[a.priority]
    );

    setTasks(updatedTasks);
    setTitle('');
    setPriority('Medium');
  };

  const toggleComplete = (id) => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task => {
    const priorityMatch = filterPriority === 'All' || task.priority === filterPriority;
    const statusMatch =
      filterStatus === 'All' ||
      (filterStatus === 'Completed' && task.completed) ||
      (filterStatus === 'Incomplete' && !task.completed);
    return priorityMatch && statusMatch;
  });

  return (
    <div className="task-manager">
      <h2>Advanced Task Manager</h2>

      {/* Add Task */}
      <div className="add-task">
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      {/* Filters */}
      <div className="filters">
        <label>Priority:</label>
        <select value={filterPriority} onChange={(e) => setFilterPriority(e.target.value)}>
          <option>All</option>
          <option>High</option>
          <option>Medium</option>
          <option>Low</option>
        </select>

        <label>Status:</label>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option>All</option>
          <option>Completed</option>
          <option>Incomplete</option>
        </select>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {filteredTasks.map(task => (
          <li
            key={task.id}
            className={`task-item ${task.priority.toLowerCase()} ${task.completed ? 'completed' : ''}`}
          >
            <span>{task.title}</span>
            <span className="priority">[{task.priority}]</span>
            <button onClick={() => toggleComplete(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
