import { useState } from "react"
import Cart from "./Components/Cart/Cart"
import Cards from "./Components/cards/Cards"

function App() {
 const [titles,setTitles] = useState([])
  const [creditRemaining,setCreditRemaining] = useState(20)
  const [credit,setCredit] = useState(0)
  const [price,setPrice] = useState(0)




 const handleCart = (card) =>{
  const newListOfTitles = [...titles,card.title]
  setTitles(newListOfTitles)
  const courseCredit = card.credit.replace('hours','' )
  const coursePrice = card.price.replace('$','')
    setCreditRemaining(creditRemaining-parseInt(courseCredit))
    setCredit(credit+parseInt(courseCredit))
  setPrice(price+parseFloat(coursePrice))
 }

  return (
    <>
      
      <h1 className="text-4xl font-bold text-center py-5">Course Registration</h1>
      <div className=" md:flex gap-8 container mx-auto">
        <Cards handleCart={handleCart}></Cards>
        <Cart price={price} creditRemaining={creditRemaining} credit={credit} titles={titles}></Cart>
      </div>
    </>
  )
}

export default App
