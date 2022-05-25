import { FC } from "react"
import classes from "./about.module.scss"

const AboutProject: FC = () => {
    return (
        <div className={classes.about}>
            <h2>О площадке</h2>
            <div className={classes.about__details}>
                <div className={classes.about__decoration}></div>
                <div className={classes.about__info}>
                    <p className={classes.about__info_bold}>Современная площадка для проведения концертов и других 
                        мероприятий любой сложности.</p>
                    <p className={classes.about__info_secondary}>Мы предоставляем всю необходимую для организаторов инфраструктуру и 
                        готовые решения под все основные задачи любого события, а также современное оборудование, 
                        соответствующее самым высоким мировым стандартам. </p>
                </div>
            </div>
        </div>
    )
}

export default AboutProject