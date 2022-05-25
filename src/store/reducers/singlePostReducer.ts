import { PostAction, PostActionType, PostState } from "types/singlePost"

const initialState: PostState = {
    post: null,
    loading: true,
    error: null
}
export const SinglePostReducer = (state=initialState, action: PostAction):PostState => {
    console.log(action)
    switch (action.type) {
        case PostActionType.FETCH_POST_SUCCESS:
            return {
                loading: false,
                error: null,
                post: action.payload.shift()
            }
        case PostActionType.FETCH_POST_ERROR:
            return {
                loading: false,
                error: action.payload,
                post: null
            }
        default: return state
    }
}