import { ConsumersAction, ConsumersState, ConsumersActionTypes } from "types/consumers"

const initialState:ConsumersState = {
    consumers: [],
    loading: true,
    error: null
}

export const ConsumersReducer = (state=initialState, action: ConsumersAction): ConsumersState => {
    switch ( action.type ) {
        case ConsumersActionTypes.FETCH_CONSUMERS:
            return { 
                loading: true, 
                error: null, 
                consumers: []
            }
        case ConsumersActionTypes.FETCH_CONSUMERS_SUCCESS:
            return { 
                loading: false, 
                error: null, 
                consumers: action.payload
            }
        case ConsumersActionTypes.FETCH_CONSUMERS_ERROR:
            return {
                loading: false,
                error: action.payload,
                consumers: []
            }
        default:
            return state
    }
}