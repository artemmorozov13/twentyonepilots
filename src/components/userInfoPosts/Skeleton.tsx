import { FC } from "react";
import classes from "./skeleton.module.scss";

const Skeleton: FC<{ skeletonElements: number }> = ({ skeletonElements }) => {
  let skeletons = [];
  for (let i = 0; i < skeletonElements; i++) {
    skeletons.push(
      <div key={i} className={classes.skeleton}>
        <div className={classes.skeleton__header}>
          <span className={classes.skeleton__title}></span>
          <span className={classes.skeleton__date}></span>
        </div>
        <p className={classes.skeleton__text}></p>
      </div>
    );
  }
  return <>{skeletons}</>;
};

export default Skeleton;
