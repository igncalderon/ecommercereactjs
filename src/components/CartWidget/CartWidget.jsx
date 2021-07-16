import React from 'react'
import Cart from'../../assets/icons/cart.svg'
import './CartWidget.css'
import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
export const CartWidget = () => {
    const {setCart, cart, addItem, clearCart, removeItem} = useContext(CartContext)
    return(
        <div className='cartwidget'>
            <NavLink to='/cart'>
                <img className='cart' src={Cart} alt='Cart'>
                </img>
                <span id="cart_menu_num" data-action="cart-can" className="badge rounded-circle">{cart.length}</span>
            </NavLink>
        </div>
        
    )
  
}