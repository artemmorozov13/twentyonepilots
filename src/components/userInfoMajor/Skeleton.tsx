import Container from "components/container/Container";
import classes from "./skeleton.module.scss";

const Skeleton = () => {
  return (
    <Container>
      <div className={classes.skeleton}>
        <div className={classes.skeleton__title}></div>
        <div className={classes.skeleton__content}>
          <div className={classes.skeleton__element}></div>
          <div className={classes.skeleton__element}></div>
          <div className={classes.skeleton__element}></div>
          <div className={classes.skeleton__element}></div>
          <div className={classes.skeleton__element}></div>
        </div>
      </div>
    </Container>
  );
};

export default Skeleton;
