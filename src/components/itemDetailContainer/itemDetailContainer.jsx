import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {catalogo} from '../itemListContainer/itemListContainer'
import {ItemCount} from '../itemCount/itemCount'
import { Link } from 'react-router-dom'
import './itemDetailContainer.css'
import Truck from '../../assets/icons/truck.svg'
// LO QQUE NECESITO PARA UTILIZAR EL CONTEXT
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
// import { ItemListContainer, catalogo } from '../itemListContainer/itemListContainer'
const ItemDetailContainer = () => {
    
    const [contador, setContador] = useState()
    const { id } = useParams()
    // const [item, setItem] = useState(catalogo[id - 1].title)
    // const [precio, setPrecio] = useState(catalogo[id - 1].price)
    const {setCart, cart, addItem} = useContext(CartContext)
    // const cart = useContext(CartContext)
    const onAdd = (unidades) => {
        setContador(unidades)
        
        // setCart( arr => [...arr, {id}])
        addItem(id,unidades)
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
                                <div className='subcard'>
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
                                    <img src={Truck} className='truck'/>
                                    <h3>Envío Gratis</h3>
                                    </div>
                                    <div className='botones'>
                                    {
                                    contador ? <Link to='/cart'><button className='buy-boton'>Terminar compra</button></Link> : <ItemCount stock={valor.stock} onAdd={onAdd}></ItemCount>
                                    }
                                    </div>
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