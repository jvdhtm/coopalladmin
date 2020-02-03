import React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/standard/layout"
import SEO from "../components/atoms/seo/seo"
import Login from "../components/organisms/login/"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Login></Login>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
