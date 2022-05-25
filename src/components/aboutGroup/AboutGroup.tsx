import { FC } from "react"
import Container from "components/container/Container"
import classes from "./group.module.scss"

const AboutGroup: FC = () => {
    return (
    <section className={classes.group}>
        <Container>
            <h2>О группе</h2>
            <p className={classes.group__description}>Twenty One Pilots — американский дуэт из Колумбуса, штат Огайо. 
            Группа образовалась в 2009 году и на данный момент состоит из Тайлера Джозефа и Джоша Дана. Коллектив 
            самостоятельно выпустил два альбома: Twenty One Pilots в 2009 и Regional at Best в 2011.</p>
        </Container>    
    </section>
    )
}

export default AboutGroup