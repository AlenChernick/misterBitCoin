import { storageService } from './storageService'

export const userService = {
    getUser,
    signup,
    addMove,
}

const USER_KEY = 'user_db'

function getUser() {
    return storageService.load(USER_KEY)
}

function signup(name) {
    const user = {
        name,
        coins: 100,
        moves: []
    }
    storageService.store(USER_KEY, user)
}

function addMove(contact, amount) {
    const user = storageService.load(USER_KEY)
    const move = {
        toId: contact._id,
        to: contact.name,
        at: new Date().toLocaleString(),
        amount,
    }
    if (amount > user.coins) return alert('You dont have enough money')
    user.moves.push(move)
    user.coins -= amount
    storageService.store(USER_KEY, user)
}




