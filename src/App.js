import React, {useState} from 'react';
import './App.css';
import Message from './components/message'

function App() {

  let [count,setCount] = useState(0);
  let [isMorning,setMorning] = useState(true);

  return (
    <div className="App">
      <header className={`App-header ${isMorning ? 'App-header' : 'App-header1'}`}>
        
        <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

        <Message counter = {count}/>

        <button onClick={() => setCount(++count)}>
          Increment
        </button>

        <button onClick={() => setCount(--count)}>
          Decrement
        </button>
        
        <br/>
        
        <button onClick={() => setMorning(!isMorning)}>
          Update Day
        </button>
        

      </header>
    </div>
  );
}

export default App;
