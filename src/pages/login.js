import React from "react"

import Layout from "../components/templates/fullscreen"
import SEO from "../components/atoms/seo/seo"
import SVGLibrary from "../components/atoms/SVGLibrary"
import LoginCard from "../components/organisms/loginCard"
import Globalcss from "../../src/components/themes/default/global"

const Login = () => (
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Layout>
    <SEO title="Login" />
    <LoginCard></LoginCard>
  </Layout>
  </>
)

export default Login
