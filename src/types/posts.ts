export interface PostsState {
    posts: Array<any>,
    loading: boolean,
    error: string | null
}
export enum PostsActionType {
    FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS",
    FETCH_POST_ERROR = "FETCH_POST_ERROR",
    FETCH_ALL_POSTS = "FETCH_ALL_POSTS"
}
interface FetchPostSuccess {
    type: PostsActionType.FETCH_POST_SUCCESS,
    payload: Array<any>
}
interface FetchPostError {
    type: PostsActionType.FETCH_POST_ERROR,
    payload: string
}
interface FetchAllPosts {
    type: PostsActionType.FETCH_ALL_POSTS,
    payload: Array<any>
}
export type PostAction = FetchPostSuccess | FetchPostError | FetchAllPosts