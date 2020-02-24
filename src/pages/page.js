import React from "react"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../components/themes/default/global"
import SVGLibrary from "../components/atoms/SVGLibrary"
import PagesCard from "../components/molecules/pagesCard"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../components/atoms/icon"


const Pages = () => {
  const pagelists = useStaticQuery(graphql`
    query SitePageQuery {
      allPagesJson {
        edges {
          node {
            pageID
            title
            name 
            path
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
      Header: "Title",
      accessor: "title"
    },
    {
      Header: "Path",
      accessor: "path"
    },
    {
      Header: "Status",
      accessor: "status"
    }
  ]

  const data = [];


pagelists.allPagesJson.edges.forEach(function (item, key) {
    console.log(item.node.status);
    data[key] = {
        edit:<span><Icon icon="edit-pencil" /><Icon icon="trash" /></span>,
        status: item.node.status  ? <span className="active">Active</span> : <span className="deactive" >deactive</span>,
        ... item.node
    };
});
console.log(data);
 return(
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Standard active="Accounts">
    <SEO title="Accounts"/>
    <PagesCard items={data} columns={columns} ></PagesCard>
  </Standard>
  </>
)}

export default Pages

