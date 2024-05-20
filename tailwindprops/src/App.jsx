import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import myImage from './assets/classic-img-1.jpg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let obj1 = [
    {
      "userId": 1,
      "id": 1,
      "name": "delectus aut autem",
      "completed": false
    },
    {
      "userId": 1,
      "id": 2,
      "name": "quis ut nam facilis et officia qui",
      "completed": false
    },
    {
      "userId": 1,
      "id": 3,
      "name": "fugiat veniam minus",
      "completed": false
    }
  ];

  return (
    <>
      <img src={reactLogo} className='logo react' alt="" srcset="" />
      {/* <img src={reactLogo} className="logo react" alt="React logo" /> */}
      <h1 className="text-blue-400 bg-slate-300 p-9 rounded-2xl text-1xl font-bold underline">
        Hello world!
      </h1>

      <Card channel="ChaiAurCode" bio = {obj1} />
    </>
  )
}

export default App
