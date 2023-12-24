import * as React from "react"
import Nav from "./organisms/nav";
import * as styles from "./header.module.scss"

const Header = () => (
    <header className={styles.sticky}>
        <Nav />
    </header>
)

export default Header
