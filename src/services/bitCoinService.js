import axios from 'axios'
import { storageService } from './storageService.js'

const KEY = 'bitcoin_db'

export const bitCoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions,
}

async function getRate(coins) {
    try {
        const { data } = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
        return data
    } catch (err) {
        console.log('Cannot get rate', err);
        throw err
    }
}

async function getMarketPrice() {
    try {
        const bitcoinData = storageService.load(KEY) || {}
        if (bitcoinData.marketPrices) return bitcoinData.marketPrices
        return await _prepData('market-price')
    } catch (err) {
        console.log('Cannot get Market Price', err);
        throw err
    }
}

async function getConfirmedTransactions() {
    try {
        const bitcoinData = storageService.load(KEY) || {}
        if (bitcoinData.confirmedTransactions) return bitcoinData.confirmedTransactions
        return await _prepData('n-transactions')
    } catch (err) {
        console.log('Cannot get confirmed transactions', err);
        throw err
    }
}

async function _prepData(type) {
    try {
        const res = await axios.get(`https://api.blockchain.info/charts/${type}?timespan=5months&format=json&cors=true`)
        const { name, description, values } = res.data
        const bitcoinValueX = values.map(value => new Date(value.x * 1000).toLocaleDateString())
        const bitcoinValueY = values.map(value => value.y)
        const newValues = {
            bitcoinValueX,
            bitcoinValueY,
        }
        const resDetails = {
            name,
            description,
            values: newValues,
        }
        const bitcoinData = storageService.load(KEY) || {}
        bitcoinData[type] = resDetails
        storageService.store(KEY, bitcoinData)
        return resDetails
    } catch (err) {
        console.log('Cannot prepare data', err);
        throw err
    }
}