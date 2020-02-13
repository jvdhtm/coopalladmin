import React from "react"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../components/themes/default/global"
import SVGLibrary from "../components/atoms/SVGLibrary"
import AccountsCard from "../components/organisms/accountsCard"

var columns =  [
  {
    Header: "First Name",
    accessor: "firstName"
  },
  {
    Header: "Last Name",
    accessor: "lastName"
  }
]
var data = [];
const Accounts = () => (
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Standard active="Accounts">
    <SEO title="Accounts" />
    <AccountsCard items={data} columns={columns} ></AccountsCard>
  </Standard>
  </>
)

export default Accounts

