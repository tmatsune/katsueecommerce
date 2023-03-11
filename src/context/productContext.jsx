
import { createContext, useState } from "react";
import itemsList from '../testUtils.js'
import { addCollection, getProducts } from "../utils/firebase.js";
import { useEffect } from "react";

export const ProductContext = createContext({
    products: []
})

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([])//itemsList

    useEffect(() => {
        //addCollection('shirts', itemsList)
        const getAllProducts = async () => {
            const allProducts = await getProducts()
            setProducts(allProducts)
        }
        // must be async to get data from firebase first before displaying items
        getAllProducts()
    }, [])

    const value = {products}
    
    return <ProductContext.Provider value={value}>
                {children}
            </ProductContext.Provider>
}       