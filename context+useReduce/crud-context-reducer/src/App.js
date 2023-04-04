import './App.css';
import Form from './components/Form';
import { ContextProvider } from './globals/Context_1';

function App() {
  return (
    <ContextProvider>
    <div className="App">
    <Form/>
    </div>
    </ContextProvider>
  );
}

export default App;
