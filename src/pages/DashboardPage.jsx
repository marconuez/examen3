import React from 'react'
import { SideBar } from '../components/SideBar'
import Mcgregor from './img/Mcgregor.png'
import Rafa from './img/Rafa.png'
import Marco from './img/Marco.png'

export const DashboardPage = () => {
    return (
        <div className="contenido">
            <SideBar/>
            <div className="contenedor principal">
                <div className="infomacion">
                    <h1 className="Titulo centrar-texto">Métodos Numéricos</h1>
                    <h2 className="tipo centrar-texto">Integrantes</h2>
        
                    <div className="contenedor-integrantes"> 
                    <div>
                        <div className="contenedor-avatar"><img className="avatar" src={Mcgregor} alt=""/></div> 
                        <p className="nombre centrar-texto">J Mcgregor</p>
                    </div>

                    <div>
                        <div className="contenedor-avatar"><img className="avatar" src={Rafa} alt=""/></div>
                        <p className="nombre centrar-texto">R Molina</p>
                    </div>

                    <div>
                        <div className="contenedor-avatar"><img className="avatar" src={Marco} alt=""/></div>
                        <p className="nombre centrar-texto">M Nuñez</p>
                    </div>
                    </div>
                    
                </div>
                
            </div>

        </div>
  )
}
