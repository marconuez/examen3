import React from 'react'
import { NavLink } from 'react-router-dom'
import menu from './img/menu.png'

export const SideBar = () => {
    return (
        <>
            <div className="contenedor-sidebar sticky-top">
                <img  className="boton-menu" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" src={menu}></img>
            </div>  

            <div className="sidebar gg ">
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
                            <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                <NavLink className="nav-item nav-link text-left p-2" to="Dashboard">Inicio</NavLink>
                            </nav>
                            <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                <NavLink className="nav-item nav-link text-left p-2" to="/Lagrange">Método de Interpolación Lagrange</NavLink>
                            </nav>
                            <nav className="nav-link btn btn-dark" aria-current="page" href="#" data-bs-dismiss="offcanvas">
                                <NavLink className="nav-item nav-link text-left p-2" to="/Gauss">Método de Gauss-Seidel</NavLink>
                            </nav>
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}
