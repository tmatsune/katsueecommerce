
import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
    cartItems : [],
    appendItem: () => {},
    popItem: () => {},
    removeItem: () => {},
    calcCost: () => {},
    getTotalItems: () => {},

});
// cartItems will have items with amount in cart
function appendItem(cartItems, addItem){
    //console.log(addItem)
 
    const itemInCart = cartItems.find((item) => 
        item.id === addItem.id)
    if(itemInCart){
        return cartItems.map(item => 
            item.id === addItem.id ? {...item, quantity: item.quantity + 1} : item
        )
    }
    return [...cartItems, {...addItem, quantity: 1}]
}
function popItem(cartItems, removeItem){

    var itemInCart = null
    cartItems.forEach(item => {
        if(item.id === removeItem.id){
            itemInCart = item
        }
    });
    if(itemInCart.quantity === 1){
        var items =  []
        cartItems.forEach(item => {
            if(item.id !== removeItem.id){
                items.push(item)
            }
        })
        return items
    }
    if(itemInCart){
        //var items = cartItems.map(item => 
          //  item.id === removeItem.id ? {...item, quantity: item.quantity - 1}: item
        //)
        var items2 = []
        cartItems.forEach(item => {
            if(item.id === removeItem.id){
                items2.push({...item, quantity: item.quantity - 1})
            }else{
                items2.push(item)
            }
        })
        return items2 // have to return new list for it to work 
    }

}

function calcCost(cartItems){
    var totalCost = 0
    cartItems.forEach(item => {
        totalCost += item.quantity * item.cost
    })
    return totalCost
}
function getTotalItems(cartItems){
    var totalItems = 0
    cartItems.forEach(item => {
        totalItems += item.quantity
    })
    return totalItems
}


export const CartProvider  = ({children}) => {
    const [cartItems, setCartItems] = useState([])
    const [costItems, setTotalCost] = useState(0)
    const [totalItems, setTotalItems] = useState(0)

    useEffect(() => {
        const cartData = window.localStorage.getItem("itemsInCart")
        console.log(cartData)
        if(cartData !== null){
            setCartItems(JSON.parse(cartData))
        }
    }, [])

    useEffect(() => {
        window.localStorage.setItem("itemsInCart", JSON.stringify(cartItems))
        console.log(cartItems)
    })

    const removeItem = (item) => {
        setCartItems(popItem(cartItems, item))
    }
    const addItem = (item) => {
        setCartItems(appendItem(cartItems, item))
    }
    const getCost = (items) => {
        setTotalCost(calcCost(items))
    }   
    const quantityItems = (items) => {
        setTotalItems(getTotalItems(items))
    }

    const value = {cartItems, addItem, removeItem, getCost, costItems, totalItems, quantityItems}

    return  <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
}
