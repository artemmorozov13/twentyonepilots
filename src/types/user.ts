type User = {
    name: string,
    username: string,
    email: string,
    phone: string,
    website: string,
    company: {
        name: string,
        bs: string
    }
}
export interface UserState {
    user: User | null,
    loading: boolean,
    error: string | null,
}
export enum UserActionsTypes {
    FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS",
    FETCH_USER_ERROR = "FETCH_USER_ERROR"
}
interface FetchUserActionSuccess {
    type: UserActionsTypes.FETCH_USER_SUCCESS,
    payload: User
}
interface FetchUserActionError {
    type: UserActionsTypes.FETCH_USER_ERROR,
    payload: string
}

export type UserAction = FetchUserActionSuccess | FetchUserActionError