import { FC, useEffect, useRef, useState } from "react"
import { useParams } from "react-router"
import SingleComment from "components/singleComment/SingleComment"
import ApplicationService from "services/ApplicationService"
import classes from "./comments.module.scss"
import Skeleton from "./Skeleton"
import { useTypedSelector } from "hooks/useTypeSelector"
import { useDispatch } from "react-redux"
import { CommentsActionTypes } from "types/comments"

const SinglePostComments:FC = () => {
    const application = new ApplicationService()
    const { comments, loading, error } = useTypedSelector(state => state.comments)

    const { id }: any = useParams()
    const dispatch = useDispatch()
    const commentsSkeletsOnPage = 5

    const onCommentsLoaded = (data: any[]) => {
        dispatch({
            type: CommentsActionTypes.FETCH_COMMENTS_SUCCESS,
            payload: data
        })
    }
    const onLoadFail = (error: any[]) => {
        dispatch({
            type: CommentsActionTypes.FETCH_COMMENTS_ERROR,
            payload: error
        })
    }

    useEffect(() => {
        application.getCommentsToPostById(id)
        .then(data => onCommentsLoaded(data))
        .catch(error => onLoadFail(error))
    },[])

    return(
        <>
            <div className={classes.comments}>
                <h2>Комментарии</h2>
                <div className={classes.comments__wrapper}>
                    {( !loading && comments ) ?
                        comments.map(comment => 
                            <SingleComment key={comment.id} comment={comment} />)
                        : <Skeleton skeletonElements={commentsSkeletsOnPage} />}
                </div>
            </div>
        </>
    )
}

export default SinglePostComments