import './App.css';
import ToggleTheme from './components/ToggleTheme';

function App() {
  return (
    <div className="App">
      <div>
        <h1>
          Toggle Theme with Props and Conditional Styling
        </h1>
        <ToggleTheme/>
      </div>
      <hr/>
    </div>
  );
}

export default App;
