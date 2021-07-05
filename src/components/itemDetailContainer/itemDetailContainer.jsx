import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ItemDetail } from '../ItemDetail/ItemDetail'
import {catalogo} from '../itemListContainer/itemListContainer'
import { NavBar } from '../NavBar/navBar'
import {ItemCount} from '../itemCount/itemCount'
import './itemDetailContainer.css'

const ItemDetailContainer = () => {
    const [contador, setContador] = useState()
    const { id } = useParams()
   
    const onAdd = (contador) => {
        setContador(contador)
    }

    // const [producto,setProducto] = useState()
    // console.log(id)
  
    
   
    // useEffect(() => {
   
    //     // const Promesa = new Promise((res, rej)=>{
    //     //     setTimeout(() => {
    //     //         res(item)
    //     //     }, 2000);
    //     // })
        
    //     // Promesa.then((res) => {
    //     //     console.log(res)
    //     //     setProducto(res)
    //     // })
    //     const getItem = () => {
    //         if(id){

    //             return catalogo.filter((item) => item.id == id)
    //         }
    //     }
    //     const item = getItem()
    //     setProducto(item)
    //     console.log(producto)
    // }, [])
    return(
             <div className="description-product">
                 {
                catalogo.filter((producto) => (producto.id == id))
                .map((valor) => {
                    
                  
                    return(
                       
                            <div className='card'>
                                <div className=''>
                                    <img className='img-product'src={valor.pictureUrl}/>
                                    
                                </div>
                                <div className="info-product">
                                    <h1 className='name-product'>
                                        {valor.title}
                                    </h1>
                                    <p>{valor.description}</p>
                                    <div className='envio'>
                                    {/* <FontAwesomeIcon icon={faTruck} className="icon-truck"/> */}
                                    <h3>Envío Gratis</h3>
                                    {
                                    contador ? <button>Terminar compra</button> : <ItemCount stock={valor.stock} onAdd={onAdd}></ItemCount>
                                    }
                                   
                                    </div>
                                
                                    
                                </div>
                            </div>
                      
                       
                        
                    )
                })
               
            }
             </div>
            
            
            
        
    )
}

export {ItemDetailContainer}