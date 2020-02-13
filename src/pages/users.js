import React from "react"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../components/themes/default/global"
import SVGLibrary from "../components/atoms/SVGLibrary"
import UsersCard from "../components/organisms/usersCard"
import namor from 'namor'


var columns =  [
  {
    Header: "First name",
    accessor: "FirstName"
  },
  {
    Header: "Last name",
    accessor: "LastName"
  },
  {
    Header: "Account",
    accessor: "account"
  }
  ,
  {
    Header: "status",
    accessor: "status"
  }
]
const newPerson = () => {
  const statusChance = Math.random()
  return {
    FirstName: namor.generate({ words: 1, numbers: 0 }),
    LastName: namor.generate({ words: 1, numbers: 0 }),
    account:  namor.generate({ words: 1, numbers: 0 }),
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
      return newPerson()
    })
  }

  return makeDataLevel()
}
const data = makeData(20);
console.log(data);
const Users = () => (
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Standard active="Accounts">
    <SEO title="Accounts" />
    <UsersCard items={data} columns={columns} ></UsersCard>
  </Standard>
  </>
)

export default Users

