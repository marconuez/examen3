import React, { useEffect, useState } from 'react'
import { SideBar } from '../components/SideBar'
import useLagrange from '../hooks/useLagrange';

export const LagrangePage = () => {

    const { interpolation, TypesInter, result_table, calculos, interpolationResult, interpolation_value } = useLagrange();

    const [cambia, setCambia] = useState(false)

    useEffect(() => {
        setCambia(false)
        const timer = setTimeout(() => {
            setCambia(true);
          }, 100);
          return () => clearTimeout(timer);

    }, [TypesInter])

    return (
        <div className="contenido">
        <SideBar />
            <div className="contenedor principal animate__animated animate__fadeInLeft">
                <div className="infomacion">
                    <h1 className="Titulo">Método de Interpolación Lagrange</h1>
                    <h2 className="tipo">Tipos de Interpolación</h2>

                    <div className="contenedor-botones">
                        <button className="boton" onClick={() => interpolation(2)}>Lineal</button>
                        <button className="boton" onClick={() => interpolation(3)}>Cuadrática</button>
                        <button className="boton" onClick={() => interpolation(4)}>Cúbica</button>
                    </div>
                    <h2 className="tipo" >Tipo de Interpolación <span className={(cambia === true) ? "opcion badge bg-success animate__animated animate__swing" : "opcion badge bg-success"}>{TypesInter}</span> </h2>

                </div>

                <br />

                <div className="table-responsive-sm">
                    {
                        calculos?.length > 0 ? (
                            <table className="table">
                                <thead className="table-light">
                                    <tr>
                                        <th scope="col">x</th>
                                        <th scope="col">f(x)</th>
                                        <th scope="col">Valor a interpolar</th>
                                        <th scope="col">fn(x)</th>
                                        {
                                            calculos?.map((valores) => (
                                                <th scope="col">L {valores.label}</th>
                                            ))
                                        }
                                    </tr>
                                </thead>

                                <tbody className='text-light'>
                                    {
                                        calculos?.map((valores) => (
                                            <tr key={valores.label}>
                                                <td>{valores.x}</td>
                                                <td>{valores.funcion}</td>
                                                <td>{valores.label === 0 ? interpolation_value : ''}</td>
                                                <td>{valores.label === 0 ? interpolationResult.toFixed(1) : ''}</td>
                                                {
                                                    calculos.map((interpolations) => (
                                                        valores.label == 0 ? <td>{interpolations.L}</td> : <td> </td>
                                                    ))
                                                }
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        ) : null
                    }
                </div>

            </div>
        </div >
    )
}
