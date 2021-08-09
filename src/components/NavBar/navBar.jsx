import React from 'react'
import './navBar.css'
import Menu from '../../assets/icons/menu.svg'
import MenuOpen from '../../assets/icons/menuOpen.svg'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


const NavBar = () => {
    
    
    const mostrarMenu = () => {
        const menuElement = document.querySelector('.menuCerrado');
        const menuElementOpen = document.querySelector('.menuAbiertoOculto');
        const categorias = document.querySelector('.categorias')
        const navBar = document.querySelector('.NavBar')
        const cantidadCart = document.querySelector('.cantidad')
        menuElement.className = "menuCerradoOculto"
        menuElementOpen.className = "menuAbierto"
        categorias.className = "categoriasAbierto"
        navBar.className = "navBarAbierto stroke"
        cantidadCart.className = "cantidadAbierto"
    }
    const cerrarMenu = () => {
        const menuCerrado = document.querySelector('.menuCerradoOculto');
        const menuAbierto = document.querySelector('.menuAbierto');
        const categoriasAbierto = document.querySelector('.categoriasAbierto');
        const navBarAbierto = document.querySelector('.navBarAbierto')
        const cantidadAbierto = document.querySelector(".cantidadAbierto")
        menuCerrado.className = "menuCerrado"
        menuAbierto.className = "menuAbiertoOculto"
        categoriasAbierto.className = "categorias"
        navBarAbierto.className = "NavBar stroke"
        cantidadAbierto.className = ("cantidad")
    }

    return(
        <nav className='NavBar stroke'>
                <p className='title'><Link className='link' to='/'>COMPUCOMPS</Link></p>
                
                <ul className="categorias">
                    <li>
                        <NavLink className='categoria' activeClassName='categoria-activa' to='/category/auriculares'>AURICULARES</NavLink>
                    </li>
                    <li>
                        <NavLink className='categoria' activeClassName='categoria-activa' to='/category/mouse'>MOUSE</NavLink>
                    </li>
                    <li>
                        <NavLink className='categoria' activeClassName='categoria-activa' to='/category/teclado'>TECLADO</NavLink>
                    </li> 
                </ul>
               
              
           
            <div className='CartWidget'>
                <CartWidget></CartWidget>
                <img className='menuCerrado' src={Menu} onClick={() => mostrarMenu()}  />
                <img className='menuAbiertoOculto' src={MenuOpen} onClick={() => cerrarMenu()}  />
            </div>
        </nav>
    )
}

export { NavBar }