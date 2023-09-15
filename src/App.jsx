import { useState } from "react"
import Cart from "./Components/Cart/Cart"
import Cards from "./Components/cards/Cards"

function App() {
 const [titles,setTitles] = useState([])
 

  return (
    <>
      
      <h1 className="text-4xl font-bold text-center py-5">Course Registration</h1>
      <div className=" md:flex gap-8 container mx-auto">
        <Cards></Cards>
        <Cart></Cart>
      </div>
    </>
  )
}

export default App
