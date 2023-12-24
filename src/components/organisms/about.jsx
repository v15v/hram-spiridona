import * as React from "react"
import * as styles from "./about.module.scss"
import {graphql, useStaticQuery} from "gatsby"
import Persons from "../molecules/persons";

export default function About() {
    const data = useStaticQuery(graphql`
        query AboutQuery {
            markdownRemark(frontmatter: {category: {eq: "about"}}) {
                html
            }
        }
    `)

    return (
        <div id="about" className={styles.container}>
            <div className={styles.data}
                 dangerouslySetInnerHTML={{__html: data.markdownRemark.html}} />
            <Persons />
        </div>
    )
}
