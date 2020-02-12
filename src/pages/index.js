import React from "react"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../components/themes/default/global"
import SVGLibrary from "../components/atoms/SVGLibrary"
import Chart from "../components/organisms/chart/"

const Index = () => (
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Standard active="Dashboard">
    <SEO title="Dashboard" />
    <Chart></Chart>
  </Standard>
  </>
)

export default Index
