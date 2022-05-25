import { CommentsAction, CommentsActionTypes, CommentsState } from "types/comments"

const initialState: CommentsState = {
    comments: [],
    loading: true,
    error: null
}

export const CommentsReducer = (state=initialState, action:CommentsAction): CommentsState => {
    switch (action.type) {
        case CommentsActionTypes.FETCH_COMMENTS_SUCCESS:
            return {
                comments: [...action.payload],
                loading: false,
                error: null
            }
        case CommentsActionTypes.FETCH_COMMENTS_ERROR:
            return {
                comments: [...state.comments],
                loading: false,
                error: action.payload
            }
        case CommentsActionTypes.ADD_NEW_COMMENTS:
            return {
                comments: [...state.comments, action.payload],
                loading: false,
                error: null
            }
        default:
            return state
    }
}