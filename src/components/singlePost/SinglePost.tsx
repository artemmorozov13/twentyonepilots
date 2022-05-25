import { useEffect } from "react"
import { useParams } from "react-router"
import ApplicationService from "services/ApplicationService"
import Skeleton from "./Skeleton"
import classes from "./post.module.scss"
import { useTypedSelector } from "hooks/useTypeSelector"
import { useDispatch } from "react-redux"
import { PostActionType } from "types/singlePost"

const SinglePost = () => {
    const application = new ApplicationService()

    const { post, loading, error }: any = useTypedSelector(state => state.post)
    const { id }: any = useParams()
    const dispatch = useDispatch()

    const onPostLoaded = (post: any[]) => {
        dispatch({
            type: PostActionType.FETCH_POST_SUCCESS,
            payload: [post]
        })
    }
    const onLoadingError = (error: any[]) => {
        dispatch({
            type: PostActionType.FETCH_POST_ERROR,
            payload: error
        })
    }

    useEffect(() => {
        application.getPostById(id)
        .then(post => onPostLoaded(post))
        .catch(error => onLoadingError(error))
    },[])
    
    if ( !loading && post ) {
        return (
            <div className={classes.post}>
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>
        )
    } else {
        return <Skeleton />
    }
}

export default SinglePost