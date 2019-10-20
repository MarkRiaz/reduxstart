import { GET_SWAPI_HEROES_SUCCESS,
GET_SWAPI_HEROES_REJECTED,
GET_SWAPI_HEROES_PENDING } from './actions'

const initialState = {
    pending: false,
    success: false,
    rejected: false,
    error: null,
    heroes: null
};

function swapiHeroes(state = initialState, action) {
    switch (action.type) {
        case GET_SWAPI_HEROES_PENDING: {
            return {
                ...state,
                pending: true,
                heroes: null,
                success: false,
            }
        }
        case GET_SWAPI_HEROES_SUCCESS: {
                return {
                    ...state,
                    pending: false,
                    success: true,
                    rejected: false,
                    heroes: action.data
                }
        }
        case GET_SWAPI_HEROES_REJECTED: {
            return {
                ...state,
                pending: false,
                success: false,
                error: action.data,
                rejected: true
            }
        }
        default: {
            return state;
        }
    }
}

export default swapiHeroes;