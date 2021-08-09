import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {ItemCount} from '../itemCount/itemCount'
import { Link } from 'react-router-dom'
import { Loader } from '../loader/loader'
import './itemDetailContainer.css'
import Truck from '../../assets/icons/truck.svg'

// IMPORTO LA INFO PARA LA BASE DE DATOS
import { projectFirestore as db} from '../../Firebase/firebase'

// LO QUE NECESITO PARA UTILIZAR EL CONTEXT
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'





const ItemDetailContainer = () => {
    const [contador, setContador] = useState()
    const [item, setItem] = useState()
    const[loader, setLoader] = useState(true)
    const { id } = useParams()
    const {setCart, cart, addItem} = useContext(CartContext)

    const onAdd = (unidades) => {
        setContador(unidades)
        const title = item.title
        const price = item.price
        const pictureUrl = item.pictureUrl
        addItem(id,unidades,title,price, pictureUrl)
    }
    
    useEffect(() => {

        // FILTRO POR EL ID SELECCIONADO
        let article = db.collection('perifericos').where("id", "==", id)
        article.get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                setItem((doc.data()));
                console.log(item);
            });
        })
        .catch((error) => {
            console.log("Error para obtener documentos: ", error);
        });
    }, [])  


    return(
        <div className="description-product">
            {
                loader && <Loader />
            }
            
            { item && 
            <div className='card'>
                <div className='subcard'>

                    <div className=''>
                        <img className='img-product'src={item.pictureUrl}/>
                    </div>
                    
                    <div className="info-product">
                        <h1 className='name-product'>
                        {item.title}
                        </h1>
                        <p>{item.description}</p>

                        <div className='envio'>            
                            <img src={Truck} className='truck'/>
                            <h3>Envío Gratis</h3>
                        </div>
                        <div className='botones'>
                        {
                        contador ? <Link to='/cart'><button className='buy-boton'>Terminar compra</button></Link> : <ItemCount stock={item.stock} onAdd={onAdd}></ItemCount>
                        }
                        </div>
                    </div>
                </div>
                               
            </div>
               
            }
        </div>
    )
}

export {ItemDetailContainer}