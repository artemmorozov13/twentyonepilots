import { FC, useEffect, useRef } from "react"
import { useParams } from "react-router"
import UserPostPreview from "components/userPostPreview/UserPostPreview"
import ApplicationService from "services/ApplicationService"
import Skeleton from "./Skeleton"
import classes from "./posts.module.scss"
import { useTypedSelector } from "hooks/useTypeSelector"
import { useDispatch } from "react-redux"
import { PostsActionType } from "types/posts"

type PostsRef = {
    current: number
}

const UserInfoPosts: FC = () => {
    const application = new ApplicationService()
    const { loading, error, posts } = useTypedSelector(state => state.posts)
    const { id }: any = useParams()
    const dispatch = useDispatch()
    const postsOnPage: PostsRef = useRef(2)

    const onPostsLoaded = (data: any[]): void => {
        dispatch({
            type: PostsActionType.FETCH_POST_SUCCESS,
            payload: data
        })
    }
    const onLoadFail = (error: any[]): void => {
        dispatch({
            type: PostsActionType.FETCH_POST_ERROR,
            payload: error
        })
    }

    const loadAllPosts = (event: any): void => {
        const userPostsNumber = application.getUserPostNumber()
        requestPosts(id, userPostsNumber, postsOnPage.current)
        dispatch({
            type: PostsActionType.FETCH_ALL_POSTS,
        })
        postsOnPage.current = userPostsNumber
        event.target.style.display = 'none'
    }

    const requestPosts = (id: number, limit: number, offset?: number): void => {
        application.getUserPostsById(id, limit, offset)
        .then(data => onPostsLoaded(data))
        .catch(error => onLoadFail(error))
    }
    
    useEffect( () => {
        requestPosts(id, postsOnPage.current)
    }, [])
    
    return (
        <tbody>
            <tr>
                <td colSpan={7}>
                    <span className={classes.content}>
                        <span className={classes.content__title}>Посты</span>
                        <span className={classes.content__posts}>
                            {( !loading && posts ) ?
                                posts.map(
                                    post => <UserPostPreview key={post.id} post={post} />
                                )
                            : <Skeleton skeletonElements={postsOnPage.current} />}
                        </span>
                        <a  
                            onClick={(e) => loadAllPosts(e)}
                            className={classes.content__show}
                            role="button"
                        >Показать все посты</a>
                    </span>
                </td>
            </tr>
        </tbody>
    )
}

export default UserInfoPosts