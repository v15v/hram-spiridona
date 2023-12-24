import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as styles from "./schedule.module.scss"

export default function Schedule() {
    const data = useStaticQuery(graphql`
        query ScheduleQuery {
            markdownRemark(frontmatter: {category: {eq: "schedule"}}) {
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
        <div id="schedule" className={styles.block} dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
    )
}
