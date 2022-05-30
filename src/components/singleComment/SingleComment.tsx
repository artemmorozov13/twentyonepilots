import { FC } from "react";
import classes from "./comment.module.scss";

export interface CommentProps {
  comment: {
    name: string;
    email: string;
    body: string;
  };
}

const SingleComment: FC<CommentProps> = ({ comment }) => {
  const { name, email, body } = comment;

  return (
    <div className={classes.comment}>
      <div className={classes.comment__header}>
        <h3>{name}</h3>
        <span className={classes.comment__email}>{email}</span>
      </div>
      <p>{body}</p>
    </div>
  );
};

export default SingleComment;
