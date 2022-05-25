export interface CommentsState {
    comments: any[] | []
    loading: boolean,
    error: string | null
}
export enum CommentsActionTypes {
    FETCH_COMMENTS_SUCCESS = "FETCH_COMMENTS_SUCCESS",
    FETCH_COMMENTS_ERROR = "FETCH_COMMENTS_ERROR",
    ADD_NEW_COMMENTS = "ADD_NEW_COMMENTS"
}
interface FetchCommentsSuccess {
    type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
    payload: any[]
}
interface HetchCommentsError {
    type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
    payload: string
}
interface AddNewComment {
    type: CommentsActionTypes.ADD_NEW_COMMENTS,
    payload: any[]
}export type CommentsAction = FetchCommentsSuccess | HetchCommentsError | AddNewComment