import { useState } from "react"
import Cart from "./Components/Cart/Cart"
import Cards from "./Components/cards/Cards"

function App() {
 const [titles,setTitles] = useState([])
 const handleTitles = (title) =>{
  const newListOfTitles = [...titles,title]
  setTitles(newListOfTitles)
 }

  return (
    <>
      
      <h1 className="text-4xl font-bold text-center py-5">Course Registration</h1>
      <div className=" md:flex gap-8 container mx-auto">
        <Cards handleTitles={handleTitles}></Cards>
        <Cart titles={titles}></Cart>
      </div>
    </>
  )
}

export default App
