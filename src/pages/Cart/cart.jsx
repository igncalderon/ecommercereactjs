import React, { Fragment } from 'react';
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Loader } from '../../components/loader/loader';
import { projectFirestore as db} from '../../Firebase/firebase'
import firebase from 'firebase/app'
import swal from 'sweetalert';
import '@firebase/firestore'
import './cart.css'
export const Cart = () => {
    const {setCart, cart, addItem, clearCart, removeItem} = useContext(CartContext)
    const [cartFinal, setCartFinal] = useState(undefined)
    const [existe, setExiste] = useState(undefined)
    const [loader,setLoader] = useState(false)
    const [orderId, setOrderID] = useState()
    const [error, setError] = useState()
    const [ordenConfirmada, setOrdenConfirmada] = useState()
    const [total, setTotal] = useState(0)
    const {idItem, cantidad, precio, titulo} = cart

    
    useEffect(() => {
        let carrito = cart;
        setCartFinal(carrito)
        
        if(carrito.length > 0){ 
            let totalParcial = 0
            cart.map((precioItem) =>{
                totalParcial += precioItem.precio * precioItem.cantidad
            })
            setExiste(true)
            setTotal(totalParcial)
            setOrdenConfirmada(true)
        }else{
            setExiste(false)
        }
        
    }, [cart])
    
    const realizarCompra = () => {
        
        const nombreInput = document.getElementById("nombreOrder")
        const apellidoInput = document.getElementById("apellidoOrder")
        const emailInput = document.getElementById("correoOrder")
        const emailConfirmadoInput = document.getElementById("correoOrderConfirmado")
        const telefonoInput = document.getElementById("telefonoOrder")

        const nombreComprador = nombreInput.value
        const apellidoComprador = apellidoInput.value
        const emailComprador = emailInput.value
        const emailConfirmadoComprador = emailConfirmadoInput.value
        const telefonoComprador = telefonoInput.value

        if((emailComprador == emailConfirmadoComprador) && nombreComprador != "" && apellidoComprador != "" && telefonoComprador != ""){
            setLoader(true)
            const ventas = db.collection("ventas")
            const nuevaOrden = {
            nombre: nombreComprador,
            apellido: apellidoComprador,
            email: emailComprador,
            telefono: telefonoComprador,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: total
            }
            ventas.add(nuevaOrden).then(({id}) => {
                setOrderID(id)
            }).catch((err) => {
                setError(err)
            }).finally(() => {
                setLoader(false)
                setExiste(false)
                clearCart()
                const divTextVacio = document.querySelector('.divCarritoVacio')
                divTextVacio.className= 'hiddenDivCarrito';
            })
        }else{
            swal("ERROR", "LOS DATOS INGRESADOS SON INCORRECTOS", "warning")
        }
        
    }

    const eliminar = (itemEliminado) => {
        removeItem(itemEliminado)
    }


    return (
        <Fragment>
            <div className='Cart'>
                <div className='subCart'>
                    <p>Carrito ({cart.length})</p> 
                    <button className='item-boton' onClick={clearCart}>Vaciar</button>  
                </div>  
                {
                    
                    
                    existe ? cart.map((valor) =>{
                        return(
                            <div className='itemCart'>
                                
                                <div className="pictureTitle-cart">
                                    <img className='imagen-cart' src={valor.pictureUrl}/>
                    
                                    <p>{valor.titulo}</p>
                                </div>
                               
                                <p>Cantidad: {valor.cantidad}</p>
                                
                                <p>$ {valor.precio * valor.cantidad}</p>
                                <button className='item-boton' onClick={() => eliminar(valor.idItem)} id={valor.idItem}>Eliminar</button>
                            </div>
                        )   
                }): 
                <div className='divCarritoVacio'>
                    <p className='textCarritoVacio' >¡Carrito Vacio!</p>
                </div>
                }
                {existe &&
                <div className='divOrder'>
                    <div className='subDivOrder'>
                        <p>Confirmar compra</p>
                        <label className='labelOrder'>Nombre:</label>
                        <input className='inputOrder' type="text" id="nombreOrder" placeholder="" required/>
                        <label className='labelOrder'>Apellido:</label>
                        <input className='inputOrder' type="text" id="apellidoOrder" placeholder="" required/>
                        <label className='labelOrder'>Correo:</label>
                        <input className='inputOrder' type="text" id="correoOrder" placeholder="" required/>
                        <label className='labelOrder'>Confirmar correo: </label>
                        <input className='inputOrder' type="text" id="correoOrderConfirmado" placeholder="" required/>
                        <label className='labelOrder'>Teléfono: </label>
                        <input className='inputOrder' type="text" id="telefonoOrder" placeholder="" required/>
                        <div>
                        </div>
                        <input className='item-boton' onClick={() => realizarCompra()} type="submit" value="Confirmar compra!"/>
                        {loader && <Loader />}
                    
                    </div>     
                </div>
                    
                }
                {orderId && <p className='numeroDeOrden'>Tu orden es: <span className="numeroDeOrdenSpan">{orderId}</span></p>}
            </div>
        </Fragment>
    )
}
