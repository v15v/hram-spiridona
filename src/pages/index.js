import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import About from "../components/organisms/about";
import Schedule from "../components/organisms/schedule";
import Contacts from "../components/organisms/contacts";
import MyCarousel from "../components/organisms/carusel";


const IndexPage = () => (
    <Layout>
        <MyCarousel />
        <About />
        <Schedule />
        <Contacts />
        <p style={{height: '700px'}}>временный отступ</p>
    </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
