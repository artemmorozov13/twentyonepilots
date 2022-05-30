import { FC } from "react";
import classes from "./contact.module.scss";

const Contact: FC = () => {
  return (
    <div className={classes.contact}>
      <div className={classes.contact__wrapper}>
        <span className={classes.contact__title}>
          Оставить заявку на проведение концерта
        </span>
        <textarea
          className={classes.contact__message}
          placeholder="Расскажите о вашем предложении"
          cols={64}
          rows={8}
        ></textarea>
        <a className={classes.contact__button}>Отправить</a>
      </div>
    </div>
  );
};

export default Contact;
