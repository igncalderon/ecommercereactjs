import React from 'react'
import Cart from'../../assets/icons/cart.svg'
import './CartWidget.css'

export const CartWidget = () => {
    return(
        <div className='cartwidget'>
            <img className='cart' src={Cart} alt='Cart'></img>

        </div>
    )
  
}