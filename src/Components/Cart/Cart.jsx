
import PropTypes from 'prop-types';

const Cart = ({titles,creditRemaining,credit,price}) => {
    
    return (
        <div className='space-y-5 bg-white p-5 rounded-xl h-min'>
            <h4 className='text-xl font-semibold text-blue-600'>Credit Hour Remaining {creditRemaining} hours</h4>
            <hr className='border-gray-400' />
            <div>
                <h4 className='text-xl font-bold'>Course Name</h4>
            
                <ol className='list-decimal p-5'>
                    {
                        titles.map((title,index)=> {
                            return <li key={index}>{title}</li>
                        })
                    }
                </ol>
            </div>
            
            <hr className='border-gray-400' />
            <h5 className='text-xl font-semibold'>Total Credit Hour : {credit}</h5>
            <hr className='border-gray-400' />
            <h4 className='text-xl font-semibold'>Total Price : {price} USD</h4>
        </div>
    );
};

Cart.propTypes = {
    titles : PropTypes.array.isRequired,
    creditRemaining : PropTypes.number,
    credit : PropTypes.number,
    price: PropTypes.number
};

export default Cart;