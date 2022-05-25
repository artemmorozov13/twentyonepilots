import Container from "components/container/Container"
import { FC, ReactNode } from "react"
import classes from "./connection.module.scss"

const Connection: FC<{ children: ReactNode }> = ({ children }) => {
    return (
    <section className={classes.connection}>
        <Container>
            { children }
        </Container>
    </section>
    )
}

export default Connection