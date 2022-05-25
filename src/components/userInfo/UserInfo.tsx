import { FC, ReactNode } from "react"
import classes from "./info.module.scss"

const UserInfo: FC<{children: ReactNode}> = ({children}) => {
    return (
    <section className={classes.info}>
        <table>
            { children }
        </table>
    </section>
    )
}

export default UserInfo