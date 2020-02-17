import React from "react"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../components/themes/default/global"
import SVGLibrary from "../components/atoms/SVGLibrary"
import UsersAdmin from "../components/organisms/usersAdmin"
import Icon from "../components/atoms/icon"
import namor from 'namor'


var columns =  [
  {
    Header: "Edit",
    accessor: "edit"
  },
  {
    Header: "First name",
    accessor: "firstName"
  },
  {
    Header: "Last name",
    accessor: "lastName"
  },
  {
    Header: "Account",
    accessor: "account"
  },
  {
    Header: "status",
    accessor: "status"
  }
]
const newPerson = () => {
  const statusChance = Math.random()
  return {
    firstName: namor.generate({ words: 1, numbers: 0 }),
    lastName: namor.generate({ words: 1, numbers: 0 }),
    account:  namor.generate({ words: 1, numbers: 0 }),
    password:  namor.generate({ words: 1, numbers: 0 }),
    id:  namor.generate({ words: 1, numbers: 0 }),
    email:  namor.generate({ words: 1, numbers: 0 })+'@'+namor.generate({ words: 1, numbers: 0 }),
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
      return {
          edit:<span><Icon icon="edit-pencil" /><Icon icon="trash" /></span>,
          ...newPerson()
        }
    })
  }

  return makeDataLevel()
}
const data = makeData(20);
const UsersPage = () => (
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Standard active="Accounts">
    <SEO title="Accounts" />
    <UsersAdmin itemActive={data[1]} items={data} columns={columns}></UsersAdmin>
  </Standard>
  </>
)

export default UsersPage

