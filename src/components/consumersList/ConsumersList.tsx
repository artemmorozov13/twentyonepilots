import { useEffect } from "react";
import { ConsumersActionTypes } from "types/consumers";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "hooks/useTypeSelector";
import Consumer from "components/consumer/Consumer";
import Container from "components/container/Container";
import ApplicationService from "services/ApplicationService";
import classes from "./consumers.module.scss";
import Skeleton from "./Skeleton";

const ConsumersList = () => {
  const { loading, consumers } = useTypedSelector((state) => state.consumers);
  const defaultConsumersOutputNumber = 4;

  const service = new ApplicationService();
  const dispatch = useDispatch();

  const onConsumersLoaded = (data: any[]) => {
    dispatch({
      type: ConsumersActionTypes.FETCH_CONSUMERS_SUCCESS,
      payload: data,
    });
  };
  const onLoadingError = (error: string) => {
    dispatch({
      type: ConsumersActionTypes.FETCH_CONSUMERS_ERROR,
      payload: error,
    });
  };

  useEffect(() => {
    service
      .getUsers()
      .then((data) => onConsumersLoaded(data))
      .catch((error) => onLoadingError(error));
  }, []);

  return (
    <section className={classes.purchase}>
      <Container>
        <div className={classes.purchase__header}>
          <h2>Купили билеты</h2>
          <div>
            <span className={classes.purchase__employed}>932</span>
            <span className={classes.purchase__avalable}>1000</span>
          </div>
        </div>
        <div className={classes.purchase__persons}>
          {!loading && consumers ? (
            consumers.map((consumer) => {
              return (
                <Consumer
                  key={consumer.id}
                  id={consumer.id}
                  name={consumer.name}
                  city={consumer.address.city}
                />
              );
            })
          ) : (
            <Skeleton skeletonElements={defaultConsumersOutputNumber} />
          )}
        </div>
      </Container>
    </section>
  );
};

export default ConsumersList;
