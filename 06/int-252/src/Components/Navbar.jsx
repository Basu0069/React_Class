import React from 'react'

const Navbar = () => {
  return (
 <div className="Nav flex justify-center items-center p-6 bg-slate-300">
      <div className="px-10">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8nOaBWZfW7yEZ1kqYPTLUb8Iuui2dYKWoyQ&s" alt="" className="w-24" />
      </div>

      <div>
        <button className='p-4 text-2xl bg-blue-700 border space-x-4'>Home</button>
        <button className='p-4 text-2xl bg-blue-700 border space-x-4'>About us </button>
        <button className='p-4 text-2xl bg-blue-700 border space-x-4'>Contact us </button>
      </div>

    <div>
      <button className=" p-15 ">
        Download App
      </button>
    </div>

    </div>
  )
}

export default Navbar
