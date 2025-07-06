import './App.css';
import QuoteGenerator from './components/QuoteGenerator';
import ToggleTheme from './components/ToggleTheme';
import UserList from './components/UserList';

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
      <div>
        <h1>
          Daily Quote Generator
        </h1>
        <QuoteGenerator/>
      </div>
      <hr/>

            <div>
        <h1>
          Fetch and Display User Profiles
        </h1>
        <UserList/>
      </div>
      <hr/>

      

      
    </div>
  );
}

export default App;
