import React from 'react'
import { SideBar } from '../components/SideBar'
import useGaussSeidel from '../hooks/useGaussSeidel';

export const GaussSeidelPage = () => {

    const { Gauss, TypesInter, calculos, matrizEs, encabezados } = useGaussSeidel();

    return (
        <div className="contenido animate__animated animate__fadeInLeft">
            <SideBar />
            <div className="contenedor principal">
                <div className="infomacion">
                    <h1 className="Titulo">Método de Gauss-Seidel</h1>
                    <h2 className="tipo">Selección de tipo de resultado</h2>

                    <div className="contenedor-botones">
                        <button className="boton" onClick={() => Gauss(1)}>Inicial</button>
                        <button className="boton" onClick={() => Gauss(2)}>Trivial</button>
                    </div>
                    <h2 className="tipo" >Tipo de resultado <span className="opcion badge bg-success animate__animated animate__swing">{TypesInter}</span> </h2>


                </div>


                <br />
                    <div className="table-responsive-sm">
                        <table className="table table-responsive">
                            <thead className="table-light rounded-top">
                                <tr className="rounded">
                                    {
                                        encabezados?.map((valores, index) => (
                                            <th scope="col">x ({index})</th>
                                        ))
                                    }
                                </tr>
                            </thead>

                            <tbody className='text-light'>
                                {

                                    calculos?.map((valores, index) => (
                                        <tr key={index}>
                                            {
                                                valores?.map((valor) => (
                                                    <td scope='col'>{valor.toFixed(3)}</td>
                                                ))
                                            }
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>

                    </div>

            </div>

        </div>
    )
}
