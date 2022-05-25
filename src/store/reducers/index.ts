import { combineReducers } from "redux"
import AddCommentReducer from "./addCommentReducer";
import { CommentsReducer } from "./commentsReducer";
import { ConsumersReducer } from "./consumersReducer";
import { PostReducer } from "./postsReducer";
import { SinglePostReducer } from "./singlePostReducer";
import { UserReducer } from "./userReducer";

export const rootReducer = combineReducers({
    consumers: ConsumersReducer,
    posts: PostReducer,
    comments: CommentsReducer,
    addComment: AddCommentReducer,
    user: UserReducer,
    post: SinglePostReducer,
})
export type RootState = ReturnType<typeof rootReducer>