import './App.css';
import TaskManager from './components/TaskManager';
import Todo from './components/Todo';

function App() {
  return (
    <div className="App">
      <div>
             <h1>
      Debugging a Multi-Feature To-Do List
     </h1>
     <Todo/>
      </div>
      <hr/>
      <div>
        <h1>
          Advanced Task Manager with Prioritization
        </h1>
        <TaskManager/>
      </div>

     


    </div>
  );
}

export default App;
