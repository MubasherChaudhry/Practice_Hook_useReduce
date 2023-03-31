import './App.css';
import CountReducer from './components/CountReducer';
import CountWithReducer from './components/CountWithReducer';
import ThirdExampleReducer from './components/ThirdExampleReducer';

function App() {
  return (
    <div className="App">
    <h1>First Example</h1>
    <h1>useReducer</h1>
    <CountReducer/>
    
    <br/><br/><br/>
  <h1>Second Example</h1>
    <CountWithReducer/>
    <br/><br/><br/>
    <ThirdExampleReducer/>
    </div>
  );
}

export default App;
