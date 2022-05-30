import Container from "components/container/Container";
import routes from "urlRoutesConfig.json";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import classes from "./header.module.scss";

const Header = () => {
  const cx = classNames.bind(classes);

  return (
    <header>
      <Container>
        <div className={classes.header__logo}>
          <Link to={routes.home}>Concert CLUB</Link>
        </div>
        <div className={classes.header__navigation}>
          <Link
            className={cx(classes.header__button, classes.header__button_large)}
            role="button"
            to="#"
          >
            Версия для слабовидящих
          </Link>
          <Link
            className={cx(classes.header__button, classes.header__button_small)}
            role="button"
            to="#"
          >
            Мой профиль
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
