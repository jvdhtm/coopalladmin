import React from "react"
import { Link } from "gatsby"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../../src/components/themes/default/global"
import SVGLibrary from "../components/atoms/SVGLibrary"

const IndexPage = () => (
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Standard>
    <SEO title="Home" />
  </Standard>
  </>
)

export default IndexPage
