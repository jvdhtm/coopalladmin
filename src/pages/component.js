import React from "react"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../components/themes/default/global"
import SVGLibrary from "../components/atoms/SVGLibrary"
import PagesAdmin from "../components/organisms/pagesAdmin"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../components/atoms/icon"


const component = () => {

 return(
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Standard active="Accounts">
    <SEO title="Accounts"/>
  </Standard>
  </>
)}

export default component

