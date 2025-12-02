import React,{useState} from 'react'

const App = () => {
  let[count,setCount]=useState(0)
  
  function handleAdd(){
    setCount(count + 1)
  }

  function handleSub(){
    setCount(count - 1)
  }

  return (
    <>
    <div className='bg-blue-200'>
      <button onClick={handleAdd}
      className="text-4xl font-extrabold text-white bg-green-500 hover:bg-green-600 transition duration-150 rounded-full w-16 h-16 shadow-lg transform hover:scale-105" >+</button>
      <div className='text-6xl font-mono font-bold text-gray-800 w-20 text-center'>{count}</div>
      <button onClick={handleSub}
      className="text-4xl font-extrabold text-white bg-red-500 hover:bg-red-600 transition duration-150 rounded-full w-16 h-16 shadow-lg transform hover:scale-105">-</button>
    </div>
    </>
  )
}

export default App