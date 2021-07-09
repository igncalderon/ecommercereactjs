import React from 'react'
import './cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useState, useEffect } from 'react'
export const Cart = () => {
    const {setCart, cart, addItem} = useContext(CartContext)
    // const {idItem, cantidad, price, title} = cart
    const {idItem, cantidad} = cart
    // const [carrito, setCarrito] = useState()
    // useEffect(() => {
    //    setCarrito(cart)
    // }, [])
    // console.log(carrito)
    // console.log(cart)
    // console.log(cart[0].idItem)
    // console.log(cantidad)
    
    return (
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Cantidad</th>
                    
                </tr>
                   {cart ? cart.map((valor) =>{
                       return(
                        <tr>
                        <td><strong>{valor.idItem}</strong></td>
                        <td><strong>{valor.cantidad}</strong></td>
                        </tr>
                       )
                       
                   }): <p>error</p>}
                    
               
                    

{/*                         
                            <td>{cart[0].idItem}</td>
                            <td>{cart[0].cantidad}</td> */}
                        
                        
                    
                    

                
               
            </table>    
        </div>
    )
}