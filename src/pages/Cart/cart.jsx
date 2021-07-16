import React from 'react';
import './cart.css'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { useState, useEffect } from 'react'

export const Cart = () => {
    const {setCart, cart, addItem, clearCart, removeItem} = useContext(CartContext)
    const [cartFinal, setCartFinal] = useState(undefined)
    const [existe, setExiste] = useState(undefined)
    const {idItem, cantidad, precio, titulo} = cart

    useEffect(() => {
        let carrito = cart;
        setCartFinal(carrito)
        if(carrito.length > 0){ 
            setExiste(true)
        }
        
    }, [])
    

    const eliminar = (itemEliminado) => {
        console.log(itemEliminado)
        removeItem(itemEliminado)
    }


    return (
        <div>
            <table>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Price</th>
                    <th>Eliminar</th>
                    <th><button onClick={clearCart}>Vaciar</button></th>
                </tr>
                {existe ? 
                    cart.map((valor) =>{
                        return(
                            <tr>
                            <td><strong>{valor.titulo}</strong></td>
                            <td><strong>{valor.cantidad}</strong></td>
                            <td><strong>$ {valor.precio}</strong></td>
                            <td><button onClick={() => eliminar(valor.idItem)} id={valor.idItem}> X </button></td>
                            </tr>
                        )   
                   }): <img className='cartVacio' src='data:image/png;base64,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'></img>}               
            </table>     
        </div>
    )
}
