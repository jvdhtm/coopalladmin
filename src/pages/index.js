import React from "react"

import Layout from "../components/templates/fullscreen"
import SEO from "../components/atoms/seo/seo"
import SVGLibrary from "../components/atoms/SVGLibrary"
import Login from "../components/organisms/login/"
import Globalcss from "../../src/components/themes/default/global"

const IndexPage = () => (
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Layout>
    <SEO title="Login" />
    <Login></Login>
  </Layout>
  </>
)

export default IndexPage
