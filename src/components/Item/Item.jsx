import React from "react" 
import './Item.css'
import { Link } from "react-router-dom"
export const Item = ({item}) => {
    return (
    
        <div className='item'>
            <p className='item-title'>{item.title}</p>
            <div className='div-image'>
                <img className='item-image' src={item.pictureUrl}/>
            </div>
            <div className='item-bottom'>
                <p className='item-precio'>$ {item.price}</p>
                <Link className='link'to={`/item/${item.id}`}>
                <button className='item-boton'>Comprar</button>
                </Link>
            </div>
        </div>
    
    )
}