import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import TodoAdd from './components/TodoAdd'
import Todos from './components/Todos'
import { useEffect } from 'react';

function App() {

  
  return (
    <>
      <h1>learn about redux toolkit.</h1>
      <TodoAdd />
      <Todos />
    </>
  )
}

export default App
