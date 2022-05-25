import { FC } from "react"
import classes from "./skeleton.module.scss"

const Skeleton: FC<{ skeletonElements: number }> = ({ skeletonElements }) => {
    let skeletons = []

    for ( let i = 0; i < skeletonElements; i++ ) {
        skeletons.push(
        <div key={i} className={classes.comment}>
            <div className={classes.comment__header}>
                <h3></h3>
                <span className={classes.comment__email}></span>
            </div>
            <p></p>
        </div>
        )
    }
    return <>{ skeletons }</>
}

export default Skeleton