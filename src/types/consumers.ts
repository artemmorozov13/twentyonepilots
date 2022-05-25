export interface ConsumersState {
    consumers: any[],
    loading: boolean,
    error: null | string
}
export enum ConsumersActionTypes {
    FETCH_CONSUMERS = "FETCH_CONSUMERS",
    FETCH_CONSUMERS_SUCCESS = "FETCH_CONSUMERS_SUCCESS",
    FETCH_CONSUMERS_ERROR = "FETCH_CONSUMERS_ERROR"
}
interface FetchConsumerAction {
    type: ConsumersActionTypes.FETCH_CONSUMERS
}
interface FetchConsumersActionSuccess {
    type: ConsumersActionTypes.FETCH_CONSUMERS_SUCCESS,
    payload: any[]
}
interface FetchConsumersActionError {
    type: ConsumersActionTypes.FETCH_CONSUMERS_ERROR,
    payload: string
}
export type ConsumersAction = FetchConsumerAction | FetchConsumersActionSuccess | FetchConsumersActionError