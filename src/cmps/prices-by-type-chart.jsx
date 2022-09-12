import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'react-chartjs-2'
import { loadToys } from '../store/actions/toy.action'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'

ChartJS.register(ArcElement, Tooltip, Legend)

export function PricesByTypeChart() {
    const { toys } = useSelector(state => state.toyModule)
    const dispatch = useDispatch()
    const labelsPriceMap = {}

    useEffect(() => {
        dispatch(loadToys())
    }, [])

    if (!toys) return <div>Loading...</div>
    const data = {
        labels: ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor"],
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

    if (toys) {
        data.labels.forEach(label => {
            let toyCount = 0
            const toySumByType = toys.reduce((acc, toy) => {
                if (toy.labels) {
                    if (toy.labels.includes(label)) {
                        acc += toy.price
                        toyCount++
                    }
                }
                return acc
            }, 0)
            labelsPriceMap[label] = toySumByType / toyCount
        })
    }
    for (const i in labelsPriceMap) {
        data.datasets[0].data.push(labelsPriceMap[i])
    }

    return (
        <div className="doughnut-container"><Doughnut data={data} />Prices By Type .</div>
    )
}
