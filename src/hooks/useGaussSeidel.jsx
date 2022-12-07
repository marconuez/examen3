import React, { useState } from 'react'

export const useGaussSeidel = () => {

    const [TypesInter, setTypesInter] = useState('')
  
    const Gauss = (type) =>{
        
        if (type === 1) {
            setTypesInter('Inicial')
        } else if (type === 2) {
            setTypesInter('Tivial')
        }
    }

    return ({
        Gauss,
        TypesInter
    })

}

export default useGaussSeidel;