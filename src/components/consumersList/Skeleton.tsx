import classes from "./skeleton.module.scss";
import classNames from "classnames/bind";
import { FC } from "react";

const consumersListSkeleton: FC<{ skeletonElements: number }> = ({
  skeletonElements,
}) => {
  const cx = classNames.bind(classes);
  let skeletons = [];

  for (let i = 0; i < skeletonElements; i++) {
    skeletons.push(
      <div key={i} className={cx(classes.card, classes.loading)}>
        <div className={classes.content}>
          <h2></h2>
          <p></p>
        </div>
      </div>
    );
  }
  return <>{skeletons}</>;
};

export default consumersListSkeleton;
