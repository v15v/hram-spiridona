import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as styles from "./about.module.scss"

export default function About() {
    const data = useStaticQuery(graphql`
        query AboutQuery {
            markdownRemark(frontmatter: {url: {eq: "about"}}) {
                frontmatter {
                    title
                    url
                }
                html
                id
            }
        }
    `)

    return (
        <div id="about" className={styles.container}>
            <div className={styles.data} dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
        </div>
    )
}
