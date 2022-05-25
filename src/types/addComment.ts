export interface AddCommentState {
    loading: boolean,
    status: string | null,
}
export enum AddCommentActionTypes {
    POST_COMMENT = "POST_COMMENT",
    POST_COMMENT_SUCCESS = "POST_COMMENT_SUCCESS",
    POST_COMMENT_ERROR = "POST_COMMENT_ERROR",
    FIELD_EMPTY = "FIELD_EMPTY"
}
interface PostCommentSuccess {
    type: AddCommentActionTypes.POST_COMMENT_SUCCESS,
    payload?: any[]
}
interface PostCommentError {
    type: AddCommentActionTypes.POST_COMMENT_ERROR,
    payload?: any[]
}
interface PostComment {
    type: AddCommentActionTypes.POST_COMMENT,
    payload?: any[]
}
interface FieldEmpty {
    type: AddCommentActionTypes.FIELD_EMPTY,
    payload?: any[]
}
export type AddCommentAction = PostCommentSuccess | PostCommentError | PostComment | FieldEmpty