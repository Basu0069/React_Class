import React from 'react'
import Card from './Card'

const Cards = ({ props }) => {
  return (
    <div className="">
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-72 text-center">
        <img
          src="https://t3.ftcdn.net/jpg/05/35/24/18/360_F_535241823_cDUlid1TYRWTLAkeQKB7V2uVdgWnjT4U.jpg"
          alt="Card image"
          className=""
        />
        <h1 className="text-xl font-semibold mt-3">Card heading</h1>
        <p className="text-gray-600 text-sm mb-4">Card description</p>

        <div>
          <Card data={props[0]} />
          <Card data={props[1]} />
          <Card data={props[2]} />
        </div>
      </div>

      <Card />
    </div>
  )
}

export default Cards
