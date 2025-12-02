import React from 'react'

const Card = ({data}) => {
  return (

    // place-content-center u can also use here in div tag 
      <div className="grid text-2xl">
      <div className="bg-white  w-72 text-center border p-3 text-2xl">
        <img
          src="https://t3.ftcdn.net/jpg/05/35/24/18/360_F_535241823_cDUlid1TYRWTLAkeQKB7V2uVdgWnjT4U.jpg"
          alt="Card image"
          className=""
        />
        <h1 className="text-2xl  mt-3 ">Card heading</h1>
        <p className="text-sm mb-4">Card description</p>
      </div>
    </div>
  )
}

export default Card

