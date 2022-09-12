import React from 'react'
import { NavLink, Outlet } from "react-router-dom"

export const ChartApp = () => {

    return (
        <div className="charts-container">
            <NavLink replace to='/chart/price-chart'><div className="title-container"><h5 className="chart-title">Prices By Type Chart</h5></div></NavLink>
            <NavLink replace to='/chart/stock-chart'><div className="title-container"><h5 className="chart-title">Inventory Stock Chart By %</h5></div></NavLink>
            <Outlet />
        </div>
    )
}