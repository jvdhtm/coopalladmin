import React from "react"
import { Link } from "gatsby"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../../src/components/themes/default/global"

const IndexPage = () => (
  <>
  <Globalcss/>
  <Standard>
    <SEO title="Home" />
    
    <Link to="/page-2/">Go to page 2</Link>
  </Standard>
  </>
)

export default IndexPage
