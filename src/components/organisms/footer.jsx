import * as React from "react"
import * as styles from "./footer.module.scss"
import {graphql, useStaticQuery} from "gatsby"

export default function Footer() {
    const data = useStaticQuery(graphql`
        query FooterQuery {
            markdownRemark(frontmatter: {category: {eq: "footer"}}) {
                html
            }
        }
    `)

    return (
        <div className={styles.container}>
            <div className={styles.data}
                 dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />

            <div className={styles.copyright}>© {new Date().getFullYear()} &middot; Спиридоньевский храм</div>
        </div>
    )
}
