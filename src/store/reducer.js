const intialState = {
    victims : [],
    regions : [],
    victim : []
}

function dataReducer (state = intialState, action ) {
    switch (action.type) {
        case "setVictims":
            return { ...state, victims : action.victims }
        case "setRegions": 
            return {...state, regions : action.regions}
        case 'setVictim':
            return {...state, victim : action.victim }
        default:
            return state
    }
}

export default dataReducer