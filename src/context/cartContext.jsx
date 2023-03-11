
import { createContext, useState } from "react";

export const CartContext = createContext({
    cartItems : [],
    appendItem: () => {},
    popItem: () => {},
    removeItem: () => {}
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


export const CartProvider  = ({children}) => {
    const [cartItems, setCartItems] = useState([])

    const removeItem = (item) => {
        setCartItems(popItem(cartItems, item))
    }

    const addItem = (item) => {
        setCartItems(appendItem(cartItems, item))
    }
    const value = {cartItems, addItem, removeItem}

    return  <CartContext.Provider value={value}>
                {children}
            </CartContext.Provider>
}
