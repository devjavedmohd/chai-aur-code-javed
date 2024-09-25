import { useState } from 'react'

function App() {
  const [color, setColor] = useState("violet")

  return (
    <div className="flex flex-wrap w-full h-screen" style={{backgroundColor: color}}>
      <div className='w-full h-screen duration-300'>
        <div className='flex flex-wrap justify-center bg-gray-50 gap-4 w-full p-6 bottom-4'>
          <button className='bg-red-600 text-white rounded border-0 shadow-sm p-4 gap-3' onClick={() => setColor('red')}>Red</button>
          <button className='bg-pink-600 text-white rounded border-0 shadow-sm p-4 gap-3' onClick={() => setColor('pink')}>pink</button>
          <button className='bg-violet-600 text-white rounded border-0 shadow-sm p-4 gap-3' onClick={() => setColor('violet')}>violet</button>
          <button className='bg-white text-black rounded border-0 shadow-sm p-4 gap-3' onClick={() => setColor('white')}>white</button>
          <button className='bg-green-600 text-white rounded border-0 shadow-sm p-4 gap-3' onClick={() => setColor('green')}>green</button>
          <button className='bg-blue-600 text-white rounded border-0 shadow-sm p-4 gap-3' onClick={() => setColor('blue')}>blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
