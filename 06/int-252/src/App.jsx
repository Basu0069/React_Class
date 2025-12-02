import React from 'react'
import Navbar from './Components/Navbar'
import Cards from './Components/Cards'
import Card from './Components/Card'

const App = () => {
  // javascript code will be written here before return okay 


  let data1 = "hello student"
  var data2 = ["ram","shyam","krishna"]
  const data3= {age: 12,course :"java",title:"haddi"}



  // actual data for cards
  let data = [
    {
      url: "https://cdn.shopify.com/s/files/1/0551/0981/2291/files/Flat_White_480x480.jpg?v=1719815848",
      title: "Coffee",
      des: "This is Coffe "
    },
    {
      url: "https://cdn1.foodviva.com/static-content/food-images/juice-recipes/mango-juice/mango-juice.jpg",
      title: "Juice",
      des: "this is Juice"
    },
    {
      url: "https://media.istockphoto.com/id/2156308388/photo/crosswalk-new-york-street-scene-usa-stock-photo.jpg?s=612x612&w=0&k=20&c=ObWAbO24AfTN_oSiURbaEypaA0HBkzIEBgP4ew9l-ck=",
      title: "View",
      des: "this is Street View"
    }
  ];


  return (
    <div>
      <Navbar/>

      {/* <Cards/> */}
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      {/* <Cards/> */}

      <Cards props={data}/>

      <div>
        <p>HEllo students</p>
        <p>{data1}</p>
        <p>{data2[1]}</p>
        <p>{data3.title}</p>
      </div>

    </div>
  )
}

export default App




// how to start basically 
// delete App.css.. delete app jsx and write rafc and then delete indexedDB.css 
// install tailwidn through tailwidn webstie  npm install tailwindcss @tailwindcss/vite
// now open vite .config and wrtie import her and also write plugins here too 
// now open index. css and pasted @import "tailwindcss" 
// now run npm run dev okay it will run the project
