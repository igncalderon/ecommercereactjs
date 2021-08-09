import React from 'react'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'

import { projectFirestore as db} from '../../Firebase/firebase'

import { useParams } from 'react-router'
import { Loader } from '../loader/loader'
import PortadaHome from '../../assets/images/portadaHome.jpg'
import Portada1 from '../../assets/images/portada1.jpg'
import Portada2 from '../../assets/images/portada2.jpg'
import Portada3 from '../../assets/images/portada3.jpg'

import './itemListContainer.css'
const ItemListContainer = () => {
    const { id } = useParams()
    const [productos,setProductos] = useState()
    const [imagen, setImagen] = useState(Portada1)
    
    const cambiarImage = () => {
        if(!id){
            setImagen(PortadaHome)
        }else if(id == 'auriculares'){
            setImagen(Portada2)
        }else if(id=='mouse'){
            setImagen(Portada1)
        }else{
            setImagen(Portada3)
         }     
    }
    
    useEffect(() => {
        db.collection('perifericos')
        .onSnapshot((snap) => {
            const documentos = []
            snap.forEach(doc => {
                documentos.push({id2: doc.id, ...doc.data()})
            });
            
            const getItems = () => {
                if(id){
                    return documentos.filter((item) => item.category == id)
                }else{
                    return documentos
                }
            }
            const items = getItems()
            setProductos(items)
            cambiarImage()
        })  
    }, [id])

    return(
       
     <div className='itemListContainer'>
         <div className='box-imagen'>
            
            <img className='portada-imagen' src={imagen}/>
         </div>
        
        {productos ? <ItemList items={productos}/> : <Loader/>}  
     </div>   

    )
}

export {ItemListContainer}