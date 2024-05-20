import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div className='w-full h-screen duration-300' style={{ backgroundColor: color }}>

        <div className='flex items-center justify-center h-screen px-2'>
          <h1 className='text-5xl text-white font-bold transform capitalize'>{color}</h1>
        </div>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl shadow-lg shadow-white-500/50">

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("olive")} style={{ backgroundColor: "olive" }} >
              Olive
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("red")} style={{ backgroundColor: "red" }} >
              Red
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("blue")} style={{ backgroundColor: "blue" }} >
              Blue
            </button>

            <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" onClick={() => setColor("purple")} style={{ backgroundColor: "purple" }} >
              Purple
            </button>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
