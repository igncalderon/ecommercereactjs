import React from 'react'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { projectFirestore as db} from '../../Firebase/firebase'
import { useParams } from 'react-router'
import { Loader } from '../loader/loader'
import './itemListContainer.css'

const ItemListContainer = () => {
    const { id } = useParams()
    const [productos,setProductos] = useState()
    
    useEffect(() => {
        db.collection('perifericos')
        .onSnapshot((snap) => {
            const documentos = []
            snap.forEach(doc => {
                documentos.push({id2: doc.id, ...doc.data()})
            });
            console.log(documentos)
            const getItems = () => {
                if(id){
                    return documentos.filter((item) => item.category == id)
                }else{
                    return documentos
                }
            }
            const items = getItems()
            setProductos(items)
        })  
    }, [id])

    return(
       
     <div className='itemListContainer'>
        {productos ? <ItemList items={productos}/> : <Loader/>}  
     </div>   

    )
}

export {ItemListContainer}