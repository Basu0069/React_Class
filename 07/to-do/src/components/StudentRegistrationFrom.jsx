import React, { useRef, useState } from 'react'

const StdRegForm = () => {

  let inputName = useRef();
  let inputRegno = useRef();
  let inputCgpa = useRef();


  let [data, setData] = useState([]);

  function handleClick() {

    let newData = {
      name: inputName.current.value,
      reg: inputRegno.current.value,
      cgpa: inputCgpa.current.value
    };

   
    setData([newData, ...data]);

  
    inputName.current.value = "";
    inputRegno.current.value = "";
    inputCgpa.current.value = "";
  }

  return (
    <div className='space-y-3 p-4'>

      <input ref={inputName} type="text" placeholder='Enter name' className='border p-2'/>

      <input ref={inputRegno} type="text" placeholder='Enter reg no' className='border p-2' />

      <input ref={inputCgpa} type="text" placeholder='Enter cgpa' className='border p-2' />

      <button onClick={handleClick}
        className='bg-blue-600 text-white px-4 py-2 rounded'>
        Submit
      </button>

      <div className='mt-4 space-y-2'>
        {data.map((e, i) => (
          <div key={i} className='p-3 border rounded bg-gray-100'>
            <div><b>Name:</b> {e.name}</div>
            <div><b>Reg No:</b> {e.reg}</div>
            <div><b>CGPA:</b> {e.cgpa}</div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default StdRegForm;
