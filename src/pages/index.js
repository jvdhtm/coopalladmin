import React from "react"
import { Link } from "gatsby"

import Layout from "../components/templates/fullscreen"
import SEO from "../components/atoms/seo/seo"
import Login from "../components/organisms/login/"
import Globalcss from "../../src/components/themes/default/global"

const IndexPage = () => (
  <>
  <Globalcss/>
  <Layout>
    <SEO title="Login" />
    <Login></Login>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  </>
)

export default IndexPage
