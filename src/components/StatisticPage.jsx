import { useEffect, useState } from 'react'
import { Chart } from '../components/Chart'
import { bitCoinService } from '../services/bitCoinService.js'

export const StatisticPage = () => {
  const [marketPrice, setMarketPrice] = useState(null)
  const [confirmedTransactions, setConfirmedTransactions] = useState(null)

  useEffect(() => {
    loadMarketInfo()
  }, [])

  const loadMarketInfo = async () => {
    const marketPrice = await bitCoinService.getMarketPrice()
    const confirmedTransactions = await bitCoinService.getConfirmedTransactions()
    setMarketPrice(marketPrice)
    setConfirmedTransactions(confirmedTransactions)
  }

  if (!marketPrice && !confirmedTransactions) return <div>Loading...</div>
  return (
    <section className='charts-page'>
      <Chart data={marketPrice} />
      <Chart data={confirmedTransactions} />
    </section>
  )
}
