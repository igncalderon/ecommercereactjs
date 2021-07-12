import React from 'react'
import Cart from'../../assets/icons/cart.svg'
import './CartWidget.css'
import { NavLink } from 'react-router-dom'
export const CartWidget = () => {
    return(
        <div className='cartwidget'>
                <NavLink to='/cart'>
                <img className='cart' src={Cart} alt='Cart'></img>
        </NavLink>
            </div>
        
    )
  
}