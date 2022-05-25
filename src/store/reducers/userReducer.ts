import { UserAction, UserActionsTypes, UserState } from "types/user"

const initialState: UserState = {
    user: null,
    loading: true,
    error: null
}
export const UserReducer = (state=initialState, action: UserAction ): UserState => {
    switch ( action.type ) {
        case UserActionsTypes.FETCH_USER_SUCCESS:
            return{
                user: action.payload,
                loading: false,
                error: null,
            }
        case UserActionsTypes.FETCH_USER_ERROR:
            return{
                user: null,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}