import { useState } from "react"
import Cart from "./Components/Cart/Cart"
import Cards from "./Components/cards/Cards"

function App() {
 const [carts,setCarts] = useState([])
  const [creditRemaining,setCreditRemaining] = useState(20)
  const [credit,setCredit] = useState(0)
  const [price,setPrice] = useState(0)




 const handleCart = (card) =>{
  const isExist = carts.find(cart => cart.title === card.title)

  let credit = parseInt(card.credit.replace('hours','' ));

  if(isExist){
   return alert('Already exist')
  }else{

    carts.forEach(cart => {
      credit += parseInt(cart.credit.replace('hours',''))
    })
    

    if(credit<=20){

    const newListOfTitles = [...carts,card]
    setCarts(newListOfTitles)

   

    const courseCredit = card.credit.replace('hours','' )
    const coursePrice = card.price.replace('$','')
    setCreditRemaining(creditRemaining-parseInt(courseCredit))
    setCredit(credit)
    setPrice(price+parseFloat(coursePrice))


    }else{
      alert('Your credit reached maximum')
    }
   
  }
  
  
 }

  return (
    <>
      
      <h1 className="text-4xl font-bold text-center py-5">Course Registration</h1>
      <div className=" md:flex gap-8 container mx-auto">
        <Cards handleCart={handleCart}></Cards>
        <Cart price={price} creditRemaining={creditRemaining} credit={credit} carts={carts}></Cart>
      </div>
    </>
  )
}

export default App
