import React, { useEffect, useState } from "react";
import axios from "axios";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = () => {
    axios
      .get("https://your-firebase-db.firebaseio.com/tasks.json")
      .then((response) => {
        const data = response.data;

        if (data) {
          // Convert object to array with id
          const parsedTasks = Object.entries(data).map(([id, task]) => ({
            id,
            ...task,
          }));
          setTasks(parsedTasks);
        } else {
          setTasks([]); // No tasks found
        }

        setError(null); // Clear error on success
      })
      .catch((err) => {
        console.error("Error fetching tasks:", err);
        setError("Failed to load tasks. Please try again.");
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div style={{ fontFamily: "Arial", maxWidth: "500px", margin: "40px auto" }}>
      <h1>Task List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {tasks.length === 0 && !error && <p>No tasks available.</p>}
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.name || "Unnamed Task"}</li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
