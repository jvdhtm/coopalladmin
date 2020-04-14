import React from "react"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../components/themes/default/global"
import SVGLibrary from "../components/atoms/SVGLibrary"
import AccountAdmin from "../components/organisms/accountAdmin"
import Icon from "../components/atoms/icon"
import { useStaticQuery, graphql } from "gatsby"


const Accounts = () => {
  const accountLists = useStaticQuery(graphql`
    query SiteAccountQuery {
      allAccountsJson {
        edges {
          node {
            accountID
            title
            credit 
            progress
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
      Header: "Name /Company Name",
      accessor: "title"
    },
    {
      Header: "Credit",
      accessor: "credit"
    },
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
  const data = [];
  accountLists.allAccountsJson.edges.forEach(function (item, key) {
    data[key] = {
        ...item.node,
        edit:<span><Icon icon="edit-pencil" /><Icon icon="trash" /></span>,
        status: <span className={item.node.status}>{item.node.status}</span>,
        statusOrg: item.node.status

    };
});
 return(
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Standard active="Page">
    <SEO title="Page"/>
    <AccountAdmin items={data} columns={columns} itemActive={data[1]}></AccountAdmin>
  </Standard>
  </>
)}

export default Accounts