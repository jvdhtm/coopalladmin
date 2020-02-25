import React from "react"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../components/themes/default/global"
import SVGLibrary from "../components/atoms/SVGLibrary"
import AccountsCard from "../components/molecules/accountsCard"
import Icon from "../components/atoms/icon"
import namor from 'namor'


var columns =  [
  {
    Header: "Edit",
    accessor: "Edit"
  },
  {
    Header: "Name /Company Name",
    accessor: "Name"
  },
  {
    Header: "Credit",
    accessor: "credit"
  }
  ,
  {
    Header: "Progress",
    accessor: "progress"
  }
  ,
  {
    Header: "status",
    accessor: "status"
  }
]
const newAccount = () => {
  const statusChance = Math.random()
  return {
    Edit:<span><Icon icon="edit-pencil" /><Icon icon="trash" /></span>,
    Name: namor.generate({ words: 1, numbers: 0 }),
    credit: Math.floor(Math.random() * 100),
    progress: <span>%{Math.floor(Math.random() * 100)}</span>,
    status:  
      statusChance > 0.60
        ? <span className="active">Active</span>
        : statusChance > 0.40
        ? <span className="confirming" >confirming</span>
        :  statusChance > 0.20 ? <span className="archived" >archived</span> : <span className="halt">halt</span>,
  }
}

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return newAccount()
    })
  }

  return makeDataLevel()
}
const data = makeData(20);
const Accounts = () => (
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Standard active="Accounts">
    <SEO title="Accounts"  />
    <AccountsCard items={data} columns={columns} ></AccountsCard>
  </Standard>
  </>
)

export default Accounts

