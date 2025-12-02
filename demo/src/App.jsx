


function App() {
 

  return (
    // there are <> known as fragments 
  <> 
     <div id="web page">

      <nav className="flex justify-evenly items-center p-4 ">
        <div>
          <img src="https://www.dominos.co.in/assets/Logo.png" alt="" />
        </div>

        <div className="">
          <button className="text-blue-500 px-4 py-2 mx-3">Our menu</button>
           <button className="text-blue-500 px-4 py-2 mx-3">dominos store </button>
            <button className="text-blue-500 px-4 py-2 mx-3">Corporate</button>
             <button className="text-blue-500 px-4 py-2 mx-3">Contact</button>
        </div>

        <div>
          <button>Download App</button>
        </div>

      </nav>
     </div>

     <div>
      <img  className="mx-auto"src="https://www.dominos.co.in/assets/header_bg.png" alt=""  />
     </div>
  </>
  )
}

export default App
