import './payPage.css'
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/cartContext';
import SHIRT2 from '../images/shirt6.webp'
import SWEATER from '../images/hoodie.png'
import PAYMENT from '../images/payment.png'
import { useNavigate } from 'react-router';

function PayPage(){
    const {cartItems, removeItem} = useContext(CartContext)
    const [numItems, setNumItems] = useState(0)
    const [totalPrice, setTotalPrice] = useState(0)
    const navigate = useNavigate()

    function goToStripe(){
        navigate('/stripe')
    }

    function amountInCart(){
        var num = 0
        cartItems.forEach(item => {
            num += item.quantity
        })
        setNumItems(num)
    }
    function totalCost(){
        var cost = 0
        cartItems.forEach(item => {
            cost += item.cost * item.quantity
        })
        setTotalPrice(cost)
    }

    useEffect( () => {
        amountInCart()
        totalCost()
    })

    return (
        <div className="payDiv">
            <div className="payDiv2">
            <h1>YOUR CART</h1>
            <h1>ITEMS:</h1>
            <h4>Items in your bag are not reserved — check out now to make them yours.</h4>
            {
                cartItems.map(item => {
                    return (
                        <PayPageItem key={item.id} item={item}></PayPageItem> 
                    )
                })
            }
            </div>
            <div className="prop">
                <h1>SUMMARY</h1>
                <hr></hr>
                <h4>Total Items: {numItems}</h4>
                <h4>Total Cost: ${totalPrice}</h4>
                <h4>Delivery: Free</h4>
                <hr className="cost"></hr>
                <h3>Total: ${totalPrice}</h3>
                <span onClick={goToStripe}>Pay</span>
                <div className='accept'>
                    <h4>Accepted Payment Methods:</h4>
                    <img alt='' src={PAYMENT} className="payment"></img>
                </div>
            </div>   
            
        </div>
    )
}
function PayPageItem({item}){
    const {title, quantity, cost} = item
    const {removeItem, addItem} = useContext(CartContext)

    function removeFromCart(){
        removeItem(item)
    }
    const addToCart = () => {
        addItem(item)
    }

    return(
        <div className="payItem">
            <img alt='' className="payImg" src={SWEATER}></img>
            <div >
                <h3>{title} </h3>
                <h3 >Quantity: {quantity}</h3>
                <h4>Cost: ${cost} x {quantity}</h4>
                <span onClick={addToCart}>add</span>
                <span onClick={removeFromCart}>remove</span>
            </div>
        </div>
    )
}

export default PayPage;