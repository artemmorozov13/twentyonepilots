export interface PostState {
    post: any[] | null,
    loading: boolean,
    error: string | null
}
export enum PostActionType {
    FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
    FETCH_POST_ERROR = "FETCH_POST_ERROR"
}
interface fetchPostSuccess {
    type: PostActionType.FETCH_POST_SUCCESS,
    payload: any[]
}
interface fetchPostError {
    type: PostActionType.FETCH_POST_ERROR,
    payload: string
}
export type PostAction = fetchPostSuccess | fetchPostError