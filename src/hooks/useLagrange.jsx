import React, { useState } from 'react'

export const useLagrange = () => {
    
    const [TypesInter, setTypesInter] = useState('')
    const [calculos, setCalculos] = useState([]);
    const [interpolationResult, setInterpolationResult ] = useState(0)
    // Asignacion de valores
    let x_Values_Array = [1995, 2000, 2005, 2010];

    let fx_Values_Array = [24.1, 30.1, 38.1, 43.2];

    // Valor a interpolar
    let interpolation_value = 2007;

    // Tabla de resultados
    let result_table = [];

    // funcion para calcular la interlolacion
    const interpolation = (type) => {

        result_table = [];

        let index = 0;
        let suma = 0;
        let initialValue = 0;
        let fechas = [];
        let fx = [];

        if (type === 2) {
            initialValue = 2;
            setTypesInter('Lineal')
        } else if (type === 3) {
            setTypesInter('Cuadrática')
            initialValue = 1;
        }else{
            setTypesInter('Cúbica')
        }
        
        for (let i = initialValue; i < x_Values_Array.length; i++) {
            let key = index;
            let prod = 1;

            for (let j = initialValue; j < x_Values_Array.length; j++) {
                if (i != j) {
                    prod = (interpolation_value - x_Values_Array[j]) / (x_Values_Array[i] - x_Values_Array[j]) * prod;
                }
            }
            
            fechas = x_Values_Array[i];
            fx = fx_Values_Array[i];

            suma = suma + fx * prod;

            result_table.push({
                label: key,
                "x": fechas,
                "funcion":fx,
                "L": prod.toFixed(type === 4 ? 3 : type === 3 ? 2 : 1)
            })
            index++;
        }
        
        console.log(result_table)
        setInterpolationResult(suma);
        setCalculos(result_table);
    }

    return ({
        interpolation,
        result_table,
        calculos,
        TypesInter,
        interpolationResult,
        interpolation_value
    })
}

export default useLagrange;