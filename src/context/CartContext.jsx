import { createContext } from 'react';
import { useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    
    const removeItem = (itemId) => {
       
        const newCart = cart.slice()
        
        const filterCart = newCart.filter(obj => obj.idItem != itemId)
        setCart(filterCart)
    }

    const addItem = (idItem,cantidad, titulo, precio, pictureUrl) => {
        if(isInCart(idItem)){
            const object = cart.find(obj => obj.idItem == idItem)
            object.cantidad += cantidad
        }else{
            setCart( arr => [...arr, {idItem,cantidad, titulo, precio, pictureUrl}])

        }
        
    }
    const clearCart = () => setCart([])

    const isInCart = (idrepeat) => {
        
        for(let i = 0; i<cart.length; i++){
            if(cart[i].idItem == idrepeat){
                return true
            }else{ return false }
        }
    }
    
    return (
        <CartContext.Provider value={{setCart, cart, addItem, clearCart, removeItem}}>
            {children}
        </CartContext.Provider>)
}




