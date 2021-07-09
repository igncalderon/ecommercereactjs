import { createContext } from 'react';
import { useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])

    const addItem = (idItem,cantidad) => {
        if(cart.length == 0){
            
            setCart( arr => [...arr, {idItem,cantidad}])
        }else{
            
            for(let i=0; i < cart.length; i++){
               if(cart[i].idItem == idItem){
                   let nuevo = cart
                   console.log(nuevo)
                   let final = (nuevo[i].cantidad += cantidad)
                    // cart[i].cantidad += cantidad;
                    alert('repetido')
                    setCart(final)
                    
               }else{
                setCart( arr => [...arr, {idItem,cantidad}])
                console.log('agregado')
               }
            }
           
           
        }
        
    }
    console.log(cart)
    return (
        <CartContext.Provider value={{setCart, cart, addItem}}>
            {children}
        </CartContext.Provider>)
}

// if(cart.length > 0){
        //     setCart( arr => [...arr, {idItem,cantidad}])
        //     for(let i = 0; i <= cart.length; i++){
        //         console.log(cart[i])
        //     }
        // }else{
        //     setCart( arr => [...arr, {idItem,cantidad}])
        // }


        // if(cart[0].idItem == 1){
        //     alert('error')
        // }
        // if(cart[0].idItem == 2){
        //     alert('fdf')
        // }