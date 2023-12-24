import * as React from "react"
import {graphql, useStaticQuery} from "gatsby"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import * as styles from "./persons.module.scss"
import {Card, Popover} from 'antd';

const {Meta} = Card;
const Persons = () => {
    const data = useStaticQuery(graphql`
        query PersonQuery {
            allMarkdownRemark(filter: {frontmatter: {category: {eq: "person"}}}) {
                nodes {
                    frontmatter {
                        featuredImage {
                            childImageSharp {
                                gatsbyImageData(width: 250)
                            }
                        }
                        name
                        job
                    }
                    id
                    html
                }
            }
        }
    `)

    return (
        <div className={styles.persons}>
            {data.allMarkdownRemark.nodes.map((node) => {
                    let featuredImg = getImage(node.frontmatter.featuredImage?.childImageSharp?.gatsbyImageData)
                    return (
                        <div className={styles.person}>
                            <Popover content={node.frontmatter.job}
                                     title={node.frontmatter.name}>
                                <Card
                                    key={node.id}
                                    hoverable
                                    style={{
                                        width: 250,
                                    }}
                                    cover={
                                        <GatsbyImage
                                            image={featuredImg}
                                            loading="eager"
                                            quality={95}
                                            formats={["auto", "webp", "avif"]}
                                            alt={node.frontmatter.name}
                                        />
                                    }
                                >
                                    <Meta title={node.frontmatter.name}
                                          description={node.frontmatter.job} />
                                </Card>
                            </Popover>
                        </div>
                    )
                }
            )
            }
        </div>
    )
}

export default Persons;