import React from "react"
import './noMatch.css'
import { Link } from "react-router-dom"
export const NoMatch = () => {
    return(
        <div className="noMatch">
            <h1>ERROR 404</h1>
            <p>Lo sentimos, esta pagina no existe 😓</p>
            <Link className='link-volver' to='/'>Volver</Link>
        </div>
    )
}