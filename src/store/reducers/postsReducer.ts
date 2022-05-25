import { PostAction, PostsActionType, PostsState } from "types/posts"

const initialState: PostsState = {
    posts: [],
    loading: true,
    error: null
}

export const PostReducer = (state=initialState, action: PostAction): PostsState => {
    switch (action.type) {
        case PostsActionType.FETCH_POST_SUCCESS:
            return {
                posts: [...initialState.posts, ...action.payload],
                loading: false,
                error: null
            }
        case PostsActionType.FETCH_POST_ERROR:
            return {
                posts: [...state.posts],
                loading: false,
                error: action.payload
            }
        case PostsActionType.FETCH_ALL_POSTS:
            return {
                posts: [...state.posts],
                loading: true,
                error: null
            }
        default:
            return state
    }
}