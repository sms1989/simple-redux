import React,{useState} from 'react';
import './App.css';

function App() {
  return <Component1  initNumber = {10}/>;
}

function Component5 ({number}) {
  return <span>{number}</span>
}

function Component4 ({number}) {
  return <Component5 number={number}/>
}

function Component3 ({number,setNumber}) {
  return <div>
    <button onClick={()=>setNumber(number-1)}>-</button>
    <button onClick={()=>setNumber(number+1)}>+</button>
  </div>
}

function Component2 ({number,setNumber}) {
  return <div>
    <Component4 number={number}/>
    <Component3 number={number} setNumber={setNumber}/>
  </div>
}

function Component1 ({initNumber = 0}) {
  const [number,setNumber] = useState(initNumber);
  return <Component2 number = {number} setNumber = {setNumber} />;
}

export default App;
