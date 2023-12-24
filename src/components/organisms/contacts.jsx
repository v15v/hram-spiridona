import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import * as styles from "./contacts.module.scss"

export default function Contacts() {
    const data = useStaticQuery(graphql`
        query ContactsQuery {
            markdownRemark(frontmatter: {category: {eq: "contacts"}}) {
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
        <div id="contacts" className={styles.container}>
            <div className={styles.data}
                 dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
        </div>
    )
}
