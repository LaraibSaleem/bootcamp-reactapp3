import React, {useState} from 'react';
import './App.css';
import {Message} from './Message.js';

function App() {

  let [count, setCount] = useState(1);
  let [isMorning, setMorning] = useState(false);

  return (
    <div className={`box ${isMorning? 'dayLight' : ''}`}>

      <h1> Good {isMorning ? 'Morning' : 'Night'} </h1>

      <Message counter={count}/>

      <button onClick={ () => setCount(++count) }> Update Counter </button>

      <button onClick={ () => setMorning(!isMorning) }> Change from Night to Day </button>

      <h2> Auto Deployment Check 4 </h2>

    </div>
  );
}

export default App;
