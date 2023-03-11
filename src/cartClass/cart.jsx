import './cart.css'
import { CartContext } from '../context/cartContext';
import { useContext} from 'react';
import { useNavigate } from 'react-router';

function CartClass(){
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    function goToPay(){
        navigate('/payPage')
    }

    return(
        <div id="dropDown">
            <h4>Cart</h4>
            <p>Items</p>
            <hr></hr>
            {
                cartItems.map(item => {
                    return (
                        <CartItem item={item} key={item.id}></CartItem>
                    )
                })
            }
            <span className='pay'onClick={goToPay}>Click to Pay</span>
         </div>
    )
}
function CartItem({item}){
    const {removeItem} = useContext(CartContext)

    function removeFromCart(){
        removeItem(item)
    }
    
    return (
        <div className='cartItem' key={item.id}>
            <p>{item.title}</p>
            <p>Quantity: {item.quantity}</p>
            <span onClick={removeFromCart} className="rSpan">Remove</span>
        </div>        
    )
}

export default CartClass;