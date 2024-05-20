import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const remove_btn = {
    marginTop: '10px'
  }
  
  // let counter = 5;
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    console.log('Value Added', Math.random());
    counter = counter + 1;
    setCounter(counter);
  }

  const removeValue = () => {
    if(counter > 0) {

      counter = counter - 1;
      setCounter(counter);
    }
    else {

      alert('0 can not be deducted, dude!');
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button type="button" onClick={addValue}>Add Value</button>
      <br />
      <button style={remove_btn} type="button" onClick={removeValue}>Remove Value</button>
    </>
  )
  
}

export default App
