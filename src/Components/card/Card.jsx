
import PropTypes from 'prop-types';
import { AiFillDollarCircle } from "@react-icons/all-files/ai/AiFillDollarCircle";
import { FaBookOpen } from '@react-icons/all-files/fa/FaBookOpen';


const Card = ({card,handleCart}) => {
const {title,description,cover_img,price,credit} = card


    return (
        <div>
            
          <div className="p-5 w-96 space-y-4 bg-white rounded-xl">
  <figure>
    <img src={cover_img} alt={title} className="rounded-xl w-full" />
  </figure>
  <div className="space-y-2">
   <div>
     <h2 className="card-title">{title}</h2>
    <p className='text-gray-600'>{description}</p>
   </div>
        <div className='flex justify-between items-center text-gray-600'>
            <div className='flex items-center gap-2'>
                 <p className='text-2xl text-black'><AiFillDollarCircle /></p>
                <p> Price : {price}</p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-2xl text-black'><FaBookOpen /></p>
                <p>Credit : {credit}</p>
            </div>
        </div>
      <button onClick={()=>{handleCart(card)}} className="btn bg-blue-600 hover:bg-blue-900 text-white w-full">select</button>
    
  </div>
</div>



        </div>
    );
};

Card.propTypes = {
    card : PropTypes.object.isRequired,
    handleCart: PropTypes.func.isRequired,
};

export default Card;