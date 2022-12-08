import React, { useState } from 'react'

export const useGaussSeidel = () => {

    const [TypesInter, setTypesInter] = useState('')

    const Gauss = (type) => {

        let matriz = [];
        let matrizEs = [];
        let tolerance_level = 15;
        let isContinue = true;

        if (type === 1) {
            setTypesInter('Inicial');
            matriz.push(new Array(2, 0.5, 1));
        } else if (type === 2) {
            setTypesInter('Trivial');
            matriz.push(new Array(0, 0, 0));
        }


        do {

            let newArrayPosition = [];

            let x1 = matriz[matriz.length - 1][0];
            let x2 = matriz[matriz.length - 1][1];
            let x3 = matriz[matriz.length - 1][2];

            let new_x1 = (5 - 1 * x2 - 1 * x3) / 1;
            let new_x2 = (10 - 1 * new_x1 - 4 * x3) / 2;
            let new_x3 = (5.34 - 0.6 * new_x1 - 1.08 * new_x2) / 1.98;

            newArrayPosition.push(new_x1, new_x2, new_x3);
            matriz.push(newArrayPosition);

            let newEs_X1 = Math.abs((new_x1 - x1) / new_x1) * 100;
            let newEs_X2 = Math.abs((new_x2 - x2) / new_x2) * 100;
            let newEs_X3 = Math.abs((new_x3 - x3) / new_x3) * 100;

            matrizEs.push(new Array(newEs_X1, newEs_X2, newEs_X3));


            if (newEs_X1 < tolerance_level &&
                newEs_X2 < tolerance_level &&
                newEs_X3 < tolerance_level) {
                isContinue = false
            }

        } while (isContinue);


    }

    return ({
        Gauss,
        TypesInter
    })

}

export default useGaussSeidel;