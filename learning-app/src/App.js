import './App.css';
import CountReducer from './components/CountReducer';
import CountWithReducer from './components/CountWithReducer';

function App() {
  return (
    <div className="App">
    
    <h1>useReducer</h1>
    <CountReducer/>
    <br/><br/><br/>
    <CountWithReducer/>
    </div>
  );
}

export default App;
