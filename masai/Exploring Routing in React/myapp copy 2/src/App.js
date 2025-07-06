import "./App.css";
import QuoteGenerator from "./components/QuoteGenerator";
import Stopwatch from "./components/Stopwatch";
import ToggleTheme from "./components/ToggleTheme";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Toggle Theme with Props and Conditional Styling</h1>
        <ToggleTheme />
      </div>
      <hr />
      <div>
        <h1>Daily Quote Generator</h1>
        <QuoteGenerator />
      </div>
      <hr />

      <div>
        <h1>React Stopwatch with Sound Trigger</h1>
        <Stopwatch />
      </div>
      <hr />
      <hr />

      <div>
        <h1>Fetch and Display User Profiles</h1>
        <UserList />
      </div>
    </div>
  );
}

export default App;
