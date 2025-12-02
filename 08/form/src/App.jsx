import React, { useState } from 'react'
import Form from './components/Form'
import MyContext from './components/MyContext'

const App = () => {
  let [data, setData] = useState([])

  function handleAdd(newItem) {
    setData(old => [newItem, ...old])
  }

  function handleDelete(indexToDelete) {
    setData(old => old.filter((value, index) => index !== indexToDelete))
  }

  return (
    <div>
     
      <div className="bg-amber-600 p-4 text-center text-white text-3xl">
        Nav
      </div>

      
      <MyContext.Provider value={{ handleAdd, handleDelete, data }}>
        <Form />
      </MyContext.Provider>

    </div>
  )
}

export default App
