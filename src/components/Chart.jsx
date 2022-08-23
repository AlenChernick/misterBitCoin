import React from 'react'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export function Chart(props) {
  const { name, description, values } = props.data
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: name,
      },
    },
  }

  const labels = values.bitcoinValueX

  const data = {
    labels,
    datasets: [
      {
        label: description,
        data: values.bitcoinValueY,
        backgroundColor: 'rgba(20, 150, 255, 0.5)',
      },
    ],
  }

  return <Line className='line-chart' options={options} data={data} />
}
