
import PropTypes from 'prop-types';

const Cart = ({titles}) => {
    
    return (
        <div className='space-y-5 bg-white p-5 rounded-xl h-min'>
            <h4 className='text-xl font-semibold text-blue-600'>Credit Hour Remaining 7 hours</h4>
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
            <h5 className='text-xl font-semibold'>Total Credit Hour : 13</h5>
            <hr className='border-gray-400' />
            <h4 className='text-xl font-semibold'>Total Price : 4800 USD</h4>
        </div>
    );
};

Cart.propTypes = {
    titles : PropTypes.array.isRequired,
};

export default Cart;