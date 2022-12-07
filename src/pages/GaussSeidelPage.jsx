import React from 'react'
import { SideBar } from '../components/SideBar'
import useGaussSeidel from '../hooks/useGaussSeidel';

export const GaussSeidelPage = () => {

    const { Gauss, TypesInter } = useGaussSeidel();
  
    return (
        <div className="contenido">
            <SideBar/>
            <div className="contenedor principal">
                <div className="infomacion">
                    <h1 className="Titulo">Método de Gauss-Seidel</h1>
                    <h2 className="tipo">Selección de tipo de resultado</h2>
        
                    <div className="contenedor-botones"> 
                        <button className="boton" onClick={() => Gauss(1)}>Inicial</button>
                        <button className="boton" onClick={() => Gauss(2)}>Trivial</button>
                    </div>
                    <h2 className="tipo" >Tipo de resultado <span className="opcion">{TypesInter}</span> </h2>
        
                    
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
            </div>
            
        </div>
    )
}
