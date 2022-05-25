import { Link } from "react-router-dom"
import routes from "urlRoutesConfig.json"
import classes from "./consumer.module.scss"
import { FC } from "react"

export interface ConsumerProps {
    id: number,
    name: string,
    city: string
}

const Consumer: FC<ConsumerProps> = ({ id, name, city }) => {
    return (
        <div className={classes.consumer}>
            <div className={classes.consumer__wrapper}>
                <div className={classes.consumer__info}>
                    <span className={classes.consumer__name}>{name}</span>
                    <span className={classes.consumer__location}>{city}</span>
                </div>
                <Link
                    className={classes.consumer__button}
                    to={`${routes.user}/${id}`}
                    role="button"
                >Смотреть профиль</Link>
            </div>
        </div>
    )
}

export default Consumer