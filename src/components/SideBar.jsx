import React from 'react'
import menu from './img/menu.png'

export const SideBar = () => {
    return (
        <>
            <div className="contenedor-sidebar">
                <img  className="boton-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" src={menu}></img>
            </div>  

            <div className="sidebar">
                <div className="offcanvas offcanvas-start bg-dark text-bg-dark" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                    <h4 className="offcanvas-title " id="offcanvasExampleLabel">Métodos Numéricos</h4>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                    <div className="texto">
                        Seleccione un método numérico
                    </div>
                    
                    <div className="contenedor-lista">
                        <ul>
                        <li><a className="dropdown-item opc" href="index.html">Menú Principal</a></li>
                        <li><a className="dropdown-item opc" href="metodo1.html">Método de Interpolación Lagrange</a></li>
                        <li><a className="dropdown-item opc" href="metodo2.html">Método de Gauss-Seidel</a></li>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
