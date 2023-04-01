
import './App.css';
import CountReducer from './components/CountReducer';
import CountWithReducer from './components/CountWithReducer';
import FifthExample from './components/FifthExample';
import ForthExample from './components/ForthExample';
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
    <br/><br/><br/>
    <ForthExample/>
    <br /><br /><br />
    <FifthExample/>
    </div>
  );
}

export default App;
