import { useState } from 'react'
import Navbar from './generales/Navbar'
import Footer from './generales/Footer'
import Card from './generales/Card'
import data from './data/data.json'
function App() {

  let [index, setIndex] = useState(0)
  const handleClick = () => {
    setIndex(index+1)
    console.log(index)
  }
  return (
    <div className='flex flex-col w-full min-h-screen items-center justify-between'>
        <div className='flex flex-col flex-wrap gap-28 w-full justify-center items-center p-28'>
          <h1 className='font-bold text-4xl'>Numero: {index}</h1>
          <button onClick={handleClick} className='border border-black rounded bg-violet-500 text-white font-bold p-4'>Sumar</button>
          <Card text="Hola mundo" index={index}/>
        </div>
    </div>
  )
}

export default App
