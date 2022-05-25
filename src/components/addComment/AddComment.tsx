import classNames from "classnames"
import { useParams } from "react-router"
import ApplicationService from "services/ApplicationService"
import Spinner from "components/spinner/Spinner"
import classes from "./add.module.scss"
import useInput from "hooks/useInput"
import { useState } from "react";
import { useDispatch } from "react-redux"
import { AddCommentActionTypes } from "types/addComment"
import { useTypedSelector } from "hooks/useTypeSelector"
import { CommentsActionTypes } from "types/comments"

const AddComment = () => {
    const application = new ApplicationService()
    const cx = classNames

    const { id }: any = useParams()
    const { loading, status } = useTypedSelector(state => state.addComment)
    const [show, setShow] = useState(false)
    const name = useInput('')
    const email = useInput('')
    const text = useInput('')
    const dispatch = useDispatch()

    const onPostSuccess = () => {
        dispatch({ type: AddCommentActionTypes.POST_COMMENT_SUCCESS })
        dispatch({
            type: CommentsActionTypes.ADD_NEW_COMMENTS,
            payload: {
                postId: id,
                id: new Date().getTime(),
                name: name.value,
                email: email.value,
                body: text.value
            }
        })
    }
    const onPostError = () => {
        dispatch({ type: AddCommentActionTypes.POST_COMMENT_ERROR })
    }
    const requestNewComment = () => {
        if ( name.value && email.value && text.value ) {
            dispatch({ type: AddCommentActionTypes.POST_COMMENT })
            application.postComment( id, name.value, email.value, text.value )
                .then(onPostSuccess)
                .catch(onPostError)
        } else {
            dispatch({ type: AddCommentActionTypes.FIELD_EMPTY })
        }
    }

    return(
        <div className={classes.add}>
            <button
                className={classes.add__button}
                onClick={() => setShow(show => !show)}
            >Добавить комментарий</button>
            {(!loading) ?
                <div className={cx(classes.form, show ? classes.show : '')}>
                    <div className={classes.form__status}>{status}</div>
                    <input
                        type="text"
                        value={name.value}
                        onChange={name.onChange}
                        className={classes.form__name}
                        placeholder="Ваше имя"
                    />
                    <input
                        type="email"
                        value={email.value}
                        onChange={email.onChange}
                        className={classes.form__email}
                        placeholder="Ваш email"
                    />
                    <textarea
                        value={text.value}
                        onChange={text.onChange}
                        className={classes.form__text}
                        placeholder="Комментарий..."
                    ></textarea>
                    <button
                        className={classes.form__button}
                        onClick={requestNewComment}
                    >Отправить</button>
                </div> : <Spinner />
            }
        </div>
    )
}

export default AddComment