import { FC } from "react"
import { Link } from "react-router-dom"
import classes from "./post.module.scss"

export interface PostPreview {
    post: {
        id: number,
        title: string,
        body: string
    }
}

const UserPostPreview: FC<PostPreview> = ({ post }) => {
    const { id, title, body } = post

    return (
            <div className={classes.post}>
                <Link className={classes.post__route} to={`/post/${id}`}>
                    <div className={classes.post__info}>
                        <span className={classes.post__title}>{title}</span>
                        <span className={classes.post__date}>12.01.22</span>
                    </div>
                    <p className={classes.post__text}>{body}</p>
                </Link>
            </div>
    )
}

export default UserPostPreview