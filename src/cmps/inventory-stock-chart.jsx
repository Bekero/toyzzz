import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { loadToys } from '../store/actions/toy.action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

ChartJS.register(ArcElement, Tooltip, Legend)

export function InventoryStockChart() {
    const { toys } = useSelector(state => state.toyModule)
    const dispatch = useDispatch()
    const inventoryByType = {}
    const labelsInStock = []
    let keyCount = 0

    useEffect(() => {
        dispatch(loadToys())
    }, [])

    const data = {
        labels: [],
        datasets: [
            {
                label: '# of Votes',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.4)',
                    'rgba(54, 162, 235, 0.4)',
                    'rgba(255, 206, 86, 0.4)',
                    'rgba(75, 192, 192, 0.4)',
                    'rgba(153, 102, 255, 0.4)',
                    'rgba(255, 159, 64, 0.4)',
                    'rgba(25, 259, 14, 0.3)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(175, 12, 55, 1)',
                    'rgba(255, 159, 64, 1)',
                ],
                borderWidth: 0.3,
            },
        ],
    }
    if (!toys) return <div>Loading...</div>

    let toyInStockCount = 0
    toys.map(toy => {
        if (toy.inStock) {
            toy.labels.map(label => {
                labelsInStock.push(label)
                toyInStockCount++
            })
        }
    })

    labelsInStock.map(label => {
        if (!inventoryByType[label]) inventoryByType[label] = 1
        else if (inventoryByType[label]) inventoryByType[label]++
    })

    for (const i in inventoryByType) {
        data.labels.push(i)
        keyCount += inventoryByType[i]
    }

    for (const i in inventoryByType) {
        data.datasets[0].data.push(((inventoryByType[i] / keyCount) * 100))
    }
    return (
        <div className="doughnut-container"><Doughnut data={data} />Inventory By Stock .</div>
    )
}
