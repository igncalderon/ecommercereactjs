import {React, useState } from "react"
import './itemCount.css'
export const ItemCount = ({initial = 1, stock, onAdd}) => {
    const [cantidad,setCantidad] = useState(initial)

    const itemCarrito = (operacion) => {
        if(operacion == '+'){
            if(cantidad < stock){
                setCantidad(cantidad + 1)
            }
        }    
        if(operacion == '-')
            if(cantidad > 1){
                setCantidad(cantidad - 1)
             } 
        }
    

    return(
        <div>
           <div className='contador'>
                <button className='count-boton' onClick={() => itemCarrito('-')}>-</button>
                <input type="text" className='cantidad' value={cantidad} readOnly="readonly"/>
                <button className='count-boton' onClick={() => itemCarrito('+')}>+</button>
           </div>
               
             
           
            <div className='buy-div'>
                <button className='buy-boton' disabled={stock == 0} onClick={() => onAdd(cantidad)}>Comprar</button>
            </div>
        </div>
    )
}