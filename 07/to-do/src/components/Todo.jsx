import React, { useState } from 'react'

const Todo = () => {
    
    let [input, setInput] = useState("");
    let [todo, setTodo] = useState("");

    function handleInput() {
        setTodo(input);     // show only when button is clicked
        setInput("");       // clear input box
    }

  return (
    <div>
      <div className='p-5 text-center space-x-7 bg-teal-700'>
        <input
          value={input}
          className='border p-3 text-4xl'
          onChange={(e) => setInput(e.target.value)}
          type="text"
        />

        <button
          onClick={handleInput}
          className='text-white p-6 text-3xl border rounded bg-blue-900'
        >
          Add ToDo
        </button>
      </div>

      {todo && (
        <div className='p-4 text-4xl bg-teal-600 text-white flex justify-evenly'>
          {todo}
          <button
            onClick={() => setTodo("")}
            className='border p-3 bg-red-800'
          >
            Delete ToDo
          </button>
        </div>
      )}
    </div>
  )
}
 
export default Todo;
