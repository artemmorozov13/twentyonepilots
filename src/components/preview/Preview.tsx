import Container from "components/container/Container";
import background from "./background.jpeg";
import classNames from "classnames/bind";
import classes from "./preview.module.scss";

const Preview = () => {
  const cx = classNames.bind(classes);

  return (
    <section className={classes.preview}>
      <div className={classes.preview__info}>
        <div className={classes.preview__shadow}>
          <div className={classes.preview__shadow_inset}>
            <h1>Twenty One Pilots</h1>
            <span className={classes.preview__datetime}>22.02.23 в 21:00</span>
          </div>
        </div>
      </div>
      <div className={classes.preview__navigation_bottom}>
        <Container>
          <a
            className={cx(
              classes.preview__button_move,
              classes.preview__button_prev_disable
            )}
            role="button"
          >
            &#8249;
          </a>
          <a className={classes.preview__button} role="button" href="#">
            Купить билет
          </a>
          <a className={classes.preview__button_move} role="button">
            &#8250;
          </a>
        </Container>
      </div>
      <img className={classes.preview__slide} src={background} />
    </section>
  );
};

export default Preview;
