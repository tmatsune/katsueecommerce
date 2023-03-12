import SHIRT1 from '../images/shirt1.png'
import './shopStyles.css'
import { useEffect } from 'react';
import SHIRT2 from '../images/shirt6.webp'
import SWEATER from '../images/hoodie.png'
import NIKE7 from '../images/nike7.png'
import NIKE2 from '../images/nike2.png'
import NIKE3 from '../images/nike3.png'
import NIKE5 from '../images/nike5.png'
import itemsList from '../testUtils';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import { ProductContext } from '../context/productContext';

var images = [SHIRT2, SHIRT1, SWEATER, NIKE2, NIKE7, NIKE3, NIKE5, SHIRT2]

function Shop(){    
    const {products} = useContext(ProductContext)

    useEffect(() => {
        var shirt1 = document.getElementById("shirt1")
        window.addEventListener("scroll", e => {
        let value = window.scrollY
        shirt1.style.marginLeft = value * 1.2+ 'px'
        })  
    })

    return( 
        <div>
        <div className="container">
            <div className="wrapper">
                <h4>First Shirt</h4>
                <p>One of our newest designs made for active wear</p>
                <h4>$29.99</h4>
            </div>
            <div>
                <img src={SHIRT1} id="shirt1" alt=''></img>
            </div>
        </div>
            <div className='row'>
            {
                products.map(item => {
                    return(
                        <ShirtCard num={item} key={item.id} image={images[item.id]}></ShirtCard>
                    )
                })
            }
            </div>
        </div>
    )
}

function ShirtCard({num, image}){
    const {title, text, cost} = num
    const {addItem} = useContext(CartContext)

    function addItemToCart(){
        addItem(num)
    }

    return(
        <div className='card'>
            <img className="shirtCard" src={image} alt=''></img>
            <span className="dot"></span>
            <h4 className="h4Shirt">{title}</h4>
            <p className="pShirt">{text}</p>
            <br></br>
            <p className="pShirt2">Price: {cost}</p>
            <span id="addToCart" onClick={addItemToCart}>Add to cart</span>
        </div>
    )
}

export default Shop;