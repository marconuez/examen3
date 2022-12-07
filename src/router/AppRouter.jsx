import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { DashboardPage } from '../pages/DashboardPage'
import { GaussSeidelPage } from '../pages/GaussSeidelPage'
import { LagrangePage } from '../pages/LagrangePage'

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="Lagrange" element={<LagrangePage/>}/>
            <Route path="Gauss" element={<GaussSeidelPage/>}/>

            <Route path='Dashboard' element={<DashboardPage/>}/>
            <Route path='/' element={<Navigate to="Dashboard"/>}/>
        </Routes>
    )
}
