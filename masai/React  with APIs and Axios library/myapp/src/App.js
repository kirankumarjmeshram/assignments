import './App.css';
import ControlledForm from './components/ControlledForm';
import DynamicEmailForm from './components/DynamicEmailForm';
import TaskList from './components/TaskList';
import UncontrolledForm from './components/UncontrolledForm';

function App() {
  return (
    <div className="App">
     <div>
      <h1>
        Controlled Form Basics
      </h1>
      <ControlledForm/>
     </div>
     <hr/>
     <div>
      <h1>
        Uncontrolled Form Fundamentals
      </h1>
      <UncontrolledForm/>
     </div>
     <hr/>
     <div>
      <h1>
        Dynamic Form Field Managemen
      </h1>
      <DynamicEmailForm/>
     </div>
     <hr/>
     <div>
      <h1>
         Debugging Axios Integration
      </h1>
      <TaskList/>
     </div>
     <hr/>
           <div>
      <h1>
          Multi-User Data Management with Axios and Firebase
      </h1>
      <UserManagement/>
     </div>

    </div>
  );
}

export default App;
