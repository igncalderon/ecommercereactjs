import React from 'react'
import Cart from'../../assets/icons/cart.svg'

import './CartWidget.css'
import { NavLink } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { CartContext } from '../../context/CartContext'
export const CartWidget = () => {
    const { cart } = useContext(CartContext)
    
    useEffect(() => {
        actualizarCantidadCart()
    }, cart)
   
    const actualizarCantidadCart = () => {
        let cantidadItems = 0
        cart.map(item => {
            cantidadItems = cantidadItems + item.cantidad
        })
        return cantidadItems
    }
    

    return(
        <div className='cartwidget'>
            <NavLink to='/cart'>
                <img className='cart' alt='cart' src={Cart}>
                </img>
                <span id="cart_menu_num" data-action="cart-can" className="cantidad badge rounded-circle">{actualizarCantidadCart()}</span>
            </NavLink>
            
        </div>
        
    )
  
}