import React, { useState } from 'react'
import useLagrange from '../hooks/useLagrange';


export const Header = () => {

    const {interpolation, TypesInter, result_table, calculos} = useLagrange();

    return (
        <div className="contenedor principal">
            <div className="infomacion">
                <h1 className="Titulo">Método de Interpolación Lagrange</h1>
                <h2 className="tipo">Tipos de Interpolación</h2>

                <div className="contenedor-botones"> 
                    <button className="boton" onClick={ () => interpolation(2)}>Lineal</button>
                    <button className="boton" onClick={ () => interpolation(3)}>Cuadrática</button>
                    <button className="boton" onClick={ () => interpolation(4)}>Cúbica</button>
                </div>
                <h2 className="tipo" >Tipo de Interpolación <span className="opcion badge bg-success">{TypesInter}</span> </h2>

            </div>

            <br />

            <table className="table rounded-top">
                <thead  className="table-light rounded-top">
                    <tr className="rounded">
                    <th scope="col">x</th>
                    <th scope="col">f(x)</th>
                    <th scope="col">L</th>
                    </tr>
                </thead>
            {
            calculos.map(valores => (
                <tbody className='text-light'>
                    <tr key={valores.label}>
                        <td>{valores.x}</td>
                        <td>{valores.funcion}</td>
                        <td>{valores.L}</td>
                    </tr>
                </tbody>
            ))}
            </table>
            
        </div>
    )
}
