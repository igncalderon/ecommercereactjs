import { createContext } from 'react';
import { useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    
    const removeItem = (itemId) => {
        console.log(itemId)
        const newCart = cart.slice()
        console.log(newCart)
        const filterCart = newCart.filter(obj => obj.idItem != itemId)
        setCart(filterCart)
    }

    const addItem = (idItem,cantidad, titulo, precio) => {
        if(isInCart(idItem)){
            const object = cart.find(obj => obj.idItem == idItem)
            object.cantidad += cantidad
        }else{
            setCart( arr => [...arr, {idItem,cantidad, titulo, precio}])

        }
        
    }
    const clearCart = () => setCart([])

    const isInCart = (idrepeat) => {
        console.log(idrepeat)
        for(let i = 0; i<cart.length; i++){
            if(cart[i].idItem == idrepeat){
                console.log('repetido')
                return true
            }else{ return false }
        }
    }
    // console.log(cart)
    return (
        <CartContext.Provider value={{setCart, cart, addItem, clearCart, removeItem}}>
            {children}
        </CartContext.Provider>)
}




