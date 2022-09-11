import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
       <h3 data-testid="counter">{counter}</h3>
      </header>
        <div>
          <button 
            data-testid="minus-button"
            onClick={(()=> setCounter((count)=> count-1))}
            >
            -
          </button>
          <button 
            data-testid="plus-button"
            disabled={disabled}
            onClick={(()=> setCounter((count)=> count+1))}
          >
            +
          </button>
        </div>
        <div>
          <button 
          data-testid="on/off-button"
          style={{
            backgroundColor:'blue'
          }}
          onClick={()=> setDisabled(prev => !prev)}
          >
          on/off-button
          </button>
        </div>
    </div>
  );
}

export default App;
