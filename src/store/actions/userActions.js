import { bitCoinService } from "../../services/bitCoinService";
import { userService } from "../../services/userService";

export function loadUser() {
    return (dispatch, getState) => {
        try {
            const user = userService.getUser()
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('Cannot load user', err)
            throw err
        }
    }
}

export function getUserMoves() {
    return async (dispatch, getState) => {
        try {
            const userMoves = await userService.getUser().moves
            dispatch({ type: 'SET_USER_MOVES', userMoves })
        } catch (err) {
            console.log('Cannot get user moves', err);
            throw err
        }
    }
}


export function getUserRate() {
    return async (dispatch, getState) => {
        try {
            const { user } = getState().userModule
            const userRate = await bitCoinService.getRate(user.coins)
            dispatch({ type: 'SET_USER_RATE', userRate })
        } catch (err) {
            console.log('Cannot get user rate', err)
            throw err
        }
    }
}

export function addUserMove(contact, coins) {
    return async (dispatch, getState) => {
        try {
            const userMove = await userService.addMove(contact, +coins)
            dispatch({ type: 'SET_USER', userMove })
        } catch (err) {
            console.log('Cannot add user move', err)
            throw err
        }
    }
}

export function signup(contactName) {
    return async (dispatch, getState) => {
        try {
            const user = await userService.signup(contactName)
            dispatch({ type: 'SET_USER', user })
        } catch (err) {
            console.log('Cannot sign up', err)
            throw err
        }
    }
}


