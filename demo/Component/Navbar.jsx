import React from 'react'

const Navbarr = () => {
  return (
    <nav className="flex flex-col items-center bg-gray-900 text-white py-4">
    
      <div className="flex gap-10 text-lg font-medium">
        <span className="cursor-pointer hover:text-blue-400">Our Menu</span>
        <span className="cursor-pointer hover:text-blue-400">Dominos Store</span>
        <span className="cursor-pointer hover:text-blue-400">Gift Card</span>
        <span className="cursor-pointer hover:text-blue-400">Corporate Enquiry</span>
        <span className="cursor-pointer hover:text-blue-400">Contact</span>
      </div>

     
      <div className="mt-4">
        <span className="bg-blue-600 px-5 py-2 rounded-lg cursor-pointer hover:bg-blue-700">
          Download App
        </span>
      </div>
    </nav>
  )
}

export default Navbarr
