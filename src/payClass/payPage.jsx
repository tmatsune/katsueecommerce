import './payPage.css'
import { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/cartContext';
import SHIRT2 from '../images/shirt6.webp'
import SWEATER from '../images/hoodie.png'
import NIKE7 from '../images/nike7.png'
import NIKE2 from '../images/nike2.png'
import NIKE3 from '../images/nike3.png'
import NIKE5 from '../images/nike5.png'
import SHIRT1 from '../images/shirt1.png'
import PAYMENT from '../images/payment.png'
import StripeComp from '../stripeClass/stripeComp'

var images = [SHIRT2, SHIRT1, SWEATER, NIKE2, NIKE7, NIKE3, NIKE5, SHIRT2]


function PayPage(){
    const {cartItems, getCost, costItems, totalItems, quantityItems} = useContext(CartContext)
    //const navigate = useNavigate()
    //function goToStripe(){
    //    navigate('/stripe')
    //}
    const [name, setName] = useState("")

    useEffect( () => {
        quantityItems(cartItems)
        getCost(cartItems)
    }, )
    function nameHandler(e){
        setName(e.target.value)
    }

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
                <h4>Total Items: {totalItems}</h4>
                <h4>Total Cost: ${costItems}</h4>
                <h4>Delivery: Free</h4>
                <hr className="cost"></hr>
                <h3>Total: ${costItems}</h3>
                <label htmlFor="nameInput" id="nameLabel">Enter Name: </label>
                <input 
                    placeholder='Enter Name' 
                    value={name} name="nameInput"
                    id="nameInput"
                    onChange={nameHandler}>
                </input>
                <StripeComp client={name}></StripeComp>
                <div id='accept'>
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
            <img alt='' className="payImg" src={images[item.id]}></img>
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