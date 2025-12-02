// import React from 'react'

// const Counter = () =>{
//   let [] =   useState(0)
//     function handleAdd(){
//         setCount(count + 1) 

//     function handleSub(){

//     }

//     }
// }
// const Counter = () => {
//   return (
//     <div className='bg-plate-700'>
//       <div className='text-center p-5'>
//         <h1 className='text-6xl underline p-3 text-white'>Counter</h1>
//       </div>
      
//       <div>
//         <button classNme='text-white text-4xl flex justify-center items-center space-x-6 m-4'>+</button>
//         <button onClick='handleAdd' className='border px-4 py-2'>+</button>
//         <div>{count}</div>
//         <button>-</button>
//       </div>
//     </div>

//   )
// }

// export default Counter



// this is my wokring counter code okay 

import React, { useState } from 'react'

const Counter = () => {

  let [count, setCount] = useState(0)

  function handAdd() {
    setCount(count + 1)  
  }

  function handSub() {
    setCount(count - 1)   
  }

  return (
    <>
      <div>
        <button onClick={handAdd}>+ </button>
        <div>{count}</div>
        <button onClick={handSub}>-</button>
      </div>
    </>
  )
}

export default Counter;

