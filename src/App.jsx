import { useState } from "react"
import Cart from "./Components/Cart/Cart"
import Cards from "./Components/cards/Cards"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Footer from "./Components/footer/Footer";

function App() {
 const [carts,setCarts] = useState([])
  const [creditRemaining,setCreditRemaining] = useState(20)
  const [credit,setCredit] = useState(0)
  const [price,setPrice] = useState(0)

const notify = (title) => {

  toast.error(`${title} is already Added to Your Cart`, {
position: "bottom-center",
autoClose: 5000,
hideProgressBar: true,
closeOnClick: true,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "dark",
});
}


 const handleCart = (card) =>{
  const isExist = carts.find(cart => cart.title === card.title)

  let credit = parseInt(card.credit.replace('hours','' ));

  if(isExist){
   return notify(card.title)
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
      document.getElementById('limit').showModal()
    }
   
  }
  
  
 }

  return (
    <>
      
      <h1 className="text-4xl font-bold text-center py-5">Course Registration</h1>
    <div className="container mx-auto">
        <div className="flex flex-col-reverse justify-center items-center lg:items-start lg:flex-row gap-8 ">
        <Cards handleCart={handleCart}></Cards>
        <Cart price={price} creditRemaining={creditRemaining} credit={credit} carts={carts}></Cart>
      </div>
    </div>

{/* Limit Modal  */}
      <div>
              {/* Open the modal using document.getElementById('ID').showModal() method */}

<dialog id="limit" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Reached Limit!</h3>
    <p className="py-4 font-bold">You Don't Have Enough Credit Hours. <br />
   <span className="font-normal text-red-500"> Your remaining credit is {creditRemaining} {creditRemaining<=1? 'Hour' : 'Hours'} </span></p>
    
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
      </div>


<Footer></Footer>
<ToastContainer />

    </>
  )
}

export default App
