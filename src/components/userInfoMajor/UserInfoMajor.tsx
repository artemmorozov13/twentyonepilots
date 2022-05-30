import { useTypedSelector } from "hooks/useTypeSelector";
import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import ApplicationService from "services/ApplicationService";
import { UserActionsTypes } from "types/user";
import classes from "./major.module.scss";
import Skeleton from "./Skeleton";

const UserInfoMajor = () => {
  const application = new ApplicationService();

  const { id }: any = useParams();
  const { user, loading } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  const onUserLoaded = (data: Array<any>) => {
    dispatch({
      type: UserActionsTypes.FETCH_USER_SUCCESS,
      payload: data,
    });
  };
  const onLoadingError = (error: Array<any>) => {
    console.log(error);
    dispatch({
      type: UserActionsTypes.FETCH_USER_ERROR,
      payload: error,
    });
  };

  useEffect(() => {
    application
      .getUserById(id)
      .then((data) => onUserLoaded(data))
      .catch((error) => onLoadingError(error));
  }, []);

  if (!loading) {
    const { name, username, email, phone, website, company }: any = user;
    const phoneNumber = phone.split(" ")[0];

    return (
      <thead>
        <tr>
          <th className={classes.info__empty_small}></th>
          <th className={classes.info__name} colSpan={5}>
            {username}
          </th>
          <th className={classes.info__empty_large}></th>
        </tr>
        <tr className={classes.info__details}>
          <th className={classes.info__empty_small}></th>
          <th className={classes.info__location}>{name}</th>
          <th className={classes.info__email}>{email}</th>
          <th className={classes.info__phone}>{phoneNumber}</th>
          <th className={classes.info__chat}>
            <a className={classes.info__link}>{website}</a>
          </th>
          <th className={classes.info__invite}>
            <a className={classes.info__link}>{`${company.name}`}</a>
          </th>
          <th className={classes.info__empty_large}></th>
        </tr>
        <tr>
          <th className={classes.info__empty_flood} colSpan={7}></th>
        </tr>
      </thead>
    );
  } else {
    return <Skeleton />;
  }
};

export default UserInfoMajor;
