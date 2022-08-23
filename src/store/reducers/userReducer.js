const INITIAL_STATE = {
    user: null,
    userMoves: [],
    userRate: null,
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case 'SET_USER_MOVES':
            return {
                ...state,
                userMoves: action.userMoves
            }

        case 'SET_USER_RATE':
            return {
                ...state,
                userRate: action.userRate
            }

        default:
            return state
    }
}