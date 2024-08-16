import { useState } from 'react'
import Calculater from './Calculater'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-full h-screen bg-gray-600'>
      <h1 className='bg-orange-500 text-center font-bold text-2xl p-2'>Calculater</h1>
      <div className='w-full h-screen bg-gray-600 flex justify-center p-8'>
        <div className='w-full max-w-md'>
          <Calculater />
        </div>
      </div>
    </div>
    
  )
}

export default App
