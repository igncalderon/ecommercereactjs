import React from 'react'
import { useState, useEffect } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { NavBar } from '../NavBar/navBar'
import { useParams } from 'react-router'
import { Loader } from '../loader/loader'
import './itemListContainer.css'
let catalogo = [
    {
    id: '1',
    title: 'Teclado HyperX Alloy FPS PRO',
    price: 9529,
    pictureUrl: 'https://www.newcomputers.com.ar/foto.asp?src=/fotosweb/147/14714.jpg&ancho=400&interior=380&logo=',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!',
    stock: 4,
    category: 'teclado'

},
{
    id: '2',
    title: 'Mouse de juego Logitech G Series Lightsync G203 negro',
    price: 2730,
    pictureUrl: 'https://axa.com.ar/webaxa/18556/mouse-gamer-logitech-g203-lightsync-usb-blanco.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!',
    stock: 6,
    category: 'mouse'
},
{
    id: '3',
    title: 'Mouse de juego Razer DeathAdder Essential negro',
    price: 4000,
    pictureUrl: 'https://www.fullh4rd.com.ar/img/productos/Pics_Prod/mouse-gamer-razer-deathadder-elite-0.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!',
    stock: 5,
    category: 'mouse'
},
{
    id: '4',
    title: 'Auriculares gamer Redragon Zeus black y red',
    price: 7050,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_666268-MLA40762447115_022020-O.webp',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!',
    stock: 4,
    category: 'auriculares'
},
{
    id: '5',
    title: 'Auriculares gamer Logitech G Series G332 black',
    price: 45000,
    pictureUrl: 'https://http2.mlstatic.com/D_NQ_NP_801126-MLA40433953617_012020-O.webp',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt neque sunt quidem possimus nam maxime nobis consectetur, temporibus aspernatur nemo dicta, hic nulla quisquam ea repellendus minus modi, voluptatem perspiciatis!',
    stock: 5,
    category: 'auriculares'
}
] 
const ItemListContainer = () => {
    const { id } = useParams()
    // console.log(id)
    const [productos,setProductos] = useState()

    


    useEffect(() => {
        const getItems = () => {
            if(id){
               return catalogo.filter((item) => item.category == id)
            }else{
                
                    return catalogo
                
                
            }
        }
        const items = getItems()
        if(!productos){
            setTimeout(() => {
                setProductos(items)
            }, 1000);
        }else{
            setProductos(items)
        }
      
        
        
        
    }, [id])
    return(
       
     <div className='itemListContainer'>
         
         {productos ? <ItemList items={productos}/> : <Loader/>}
     </div>   
        
        
        )
}

export {ItemListContainer, catalogo}