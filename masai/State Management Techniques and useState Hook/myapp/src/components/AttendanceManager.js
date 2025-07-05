import React, { useState } from 'react';

const initialStudents = [
  { id: 1, name: 'Alice', present: true },
  { id: 2, name: 'Bob', present: false },
  { id: 3, name: 'Charlie', present: true },
  { id: 4, name: 'Diana', present: false },
  { id: 5, name: 'Eve', present: true },
];

const AttendanceManager = () => {
  const [students, setStudents] = useState(initialStudents);
  const [filter, setFilter] = useState('All');

  const toggleAttendance = (id) => {
    const updated = students.map((student) =>
      student.id === id ? { ...student, present: !student.present } : student
    );
    setStudents(updated);
  };

  const totalPresent = students.filter((s) => s.present).length;

  const filteredStudents = students.filter((student) => {
    if (filter === 'Present') return student.present;
    if (filter === 'Absent') return !student.present;
    return true; // All
  });

  return (
    <div style={{ maxWidth: '500px', margin: 'auto', fontFamily: 'Arial', padding: '30px' }}>
      <h2>Attendance Manager</h2>

      <div style={{ marginBottom: '15px' }}>
        <label style={{ marginRight: '10px' }}>Filter:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option>All</option>
          <option>Present</option>
          <option>Absent</option>
        </select>
      </div>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {filteredStudents.map((student) => (
          <li
            key={student.id}
            style={{
              marginBottom: '10px',
              padding: '10px',
              borderRadius: '5px',
              backgroundColor: student.present ? '#e0ffe0' : '#ffe0e0',
              color: student.present ? 'green' : 'red',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span>
              {student.name} - {student.present ? 'Present' : 'Absent'}
            </span>
            <button onClick={() => toggleAttendance(student.id)}>Toggle</button>
          </li>
        ))}
      </ul>

      <h4>Total Present: {totalPresent}</h4>
    </div>
  );
};

export default AttendanceManager;
