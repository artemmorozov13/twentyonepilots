import { AddCommentAction, AddCommentActionTypes, AddCommentState } from "types/addComment";

const initialState: AddCommentState = {
    loading: false,
    status: null
}
const AddCommentReducer = (state=initialState, action: AddCommentAction): AddCommentState => {
    switch (action.type) {
        case AddCommentActionTypes.POST_COMMENT:
            return {
                loading: true,
                status: null
            }
        case AddCommentActionTypes.POST_COMMENT_SUCCESS:
            return {
                loading: false,
                status: 'Комментарий добавлен'
            }
        case AddCommentActionTypes.POST_COMMENT_ERROR:
            return {
                loading: false,
                status: 'Что то пошло не так, попробуйте позже'
            }
        case AddCommentActionTypes.FIELD_EMPTY:
            return {
                loading: false,
                status: 'Нужно заполнить все поля'
            }
        default:
            return state
    }
}
export default AddCommentReducer