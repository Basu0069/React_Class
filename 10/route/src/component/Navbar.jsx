import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center bg-gray-300 h-16'>
      <div className='flex space-x-16'>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
      </div>

      <div className="flex space-x-8 items-center">
        <img
          className="w-20 h-10"
          src="https://static.wikia.nocookie.net/godofwar/images/e/e9/Kratos-_GOW_Ragnarok.png"
          alt=""
        />
        <p>Log-in</p>
      </div>
    </div>
  )
}

export default Navbar
