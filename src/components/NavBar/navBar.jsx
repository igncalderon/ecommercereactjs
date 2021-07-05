import React from 'react'
import './navBar.css'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
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
                        {/* <NavLink to='/category/:categoryId'>
                            <li>NVIDIA</li>       
                        </NavLink> */}
                        
                       
                       
                </ul>
           
            <div className='CartWidget'>
            <CartWidget></CartWidget>
            </div>
        </nav>
    )
}

export { NavBar }