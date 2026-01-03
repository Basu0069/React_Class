import React from 'react'

const Home = () => {
  return (
    <>
    <div className='grid grid-cols-2'> 
            <form action="" className=' space-y-4 border flex flex-col justify-center items-center'>
                <input className='border p-3 text-xl rounded-full'type="text" name="" id="" placeholder='enter you name ' />
                <input className='border p-3 text-xl rounded-full' type="password" name="" id="" placeholder="enter ytou password" />
                <input className='border p-3 text-xl rounded-full' type="email" name="" id=""  placeholder='enter email'/>
            </form>
            <div className='border p-3'>
                <img className='' src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2xvYmV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
        </div>
    </>
  )
}

export default Home
