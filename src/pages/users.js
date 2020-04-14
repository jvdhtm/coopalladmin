import React from "react"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../components/themes/default/global"
import SVGLibrary from "../components/atoms/SVGLibrary"
import UsersAdmin from "../components/organisms/usersAdmin"
import Icon from "../components/atoms/icon"
import { useStaticQuery, graphql } from "gatsby"


const UsersPage = () => {
  const userLists = useStaticQuery(graphql`
  query SiteUserQuery {
    allUsersJson {
      edges {
        node {
          userID
          accountID
          account
          firstName
          lastName
          password
          email
          status
        }
      }
    }
  }`);
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
      Header: "Status",
      accessor: "status"
    }
  ]
  const data = [];
userLists.allUsersJson.edges.forEach(function (item, key) {
    data[key] = {
        ...item.node,
        edit:<span><Icon icon="edit-pencil" /><Icon icon="trash" /></span>,
        status: <span className={item.node.status}>{item.node.status}</span> 
    };
});
 return(
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Standard active="Page">
    <SEO title="Page"/>
    <UsersAdmin itemActive={data[1]} items={data} columns={columns}></UsersAdmin>
  </Standard>
  </>
)}

export default UsersPage


