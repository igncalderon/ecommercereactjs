import React from "react"
import { Fragment } from "react"
import './footer.css'

export const Footer = () => {
    return (
        // <div className="footer">
           
        // </div>
        <div className="footer">
            <div className="divTitleDescription">
               <h2 className="titleFooter">COMPUCOMPS</h2>
               <p>Promover la tecnología es nuestra pasión y siempre estaremos predispuestos a ayudarte. No dudes en contactárnos.</p>
           </div>
           <div className="divContact">
               <h2 className="contactFooter">Contacto</h2>
               <p>Tel: 11 4164-6549</p>
               <p>Email: igui2301@gmail.com</p>
           </div>

        </div>
    
    )
}