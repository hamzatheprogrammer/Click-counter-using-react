import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css'
import { useState } from 'react'

function App() {

  const [num, setNum] = useState(0)

  const inc = () => {
    setNum(num + 1 )
  }
  const rst = () => {
    setNum(num * 0)
  }
  return (
    <div>
      <h1>Click Counter</h1>
        <button className='btn btn-danger ' onClick={inc}>click here to count</button>
        <button className='btn btn-danger but' onClick={rst}>Reset</button>
        <p className='rsltnum'>{num}</p>
    </div>

  )
}

export default App