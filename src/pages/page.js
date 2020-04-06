import React from "react"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../components/themes/default/global"
import SVGLibrary from "../components/atoms/SVGLibrary"
import PagesAdmin from "../components/organisms/pagesAdmin"
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
    data[key] = {
        ... item.node,
        edit:<span><Icon icon="edit-pencil" /><Icon icon="trash" /></span>,
        status: item.node.status === true  ? <span className="active">Active</span> : <span className="deactive" >deactive</span>,  
    };
});
 return(
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Standard active="Page">
    <SEO title="Page"/>
    <PagesAdmin items={data} columns={columns} ></PagesAdmin>
  </Standard>
  </>
)}

export default Pages

