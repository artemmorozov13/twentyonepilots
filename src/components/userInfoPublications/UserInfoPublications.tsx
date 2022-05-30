import classes from "./publications.module.scss";

const UserInfoPublications = () => {
  return (
    <tfoot>
      <tr>
        <td colSpan={7} className={classes.publications}>
          <h2>Публикации</h2>
          <span className={classes.publications__content}>
            <span className={classes.publication}></span>
            <span className={classes.publication}></span>
            <span className={classes.publication}></span>
            <span className={classes.publication}></span>
            <span className={classes.publication}></span>
            <span className={classes.publication}></span>
          </span>
        </td>
      </tr>
    </tfoot>
  );
};

export default UserInfoPublications;
