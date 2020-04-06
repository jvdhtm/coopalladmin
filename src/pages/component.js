import React from "react"
import Standard from "../components/templates/standard"
import SEO from "../components/atoms/seo/seo"
import Globalcss from "../components/themes/default/global"
import SVGLibrary from "../components/atoms/SVGLibrary"
import { useStaticQuery, graphql } from "gatsby"
import Icon from "../components/atoms/icon"


const ComponentPage = () => {
  const ComponentLists = useStaticQuery(graphql`
  query ComponentListsQuery {
    allComponentsJson {
      edges {
        node {
          componentID
          title
          name 
          status
        }
      }
    }
}`);
var columns =  [
  {
    Header: "Edit",
    accessor: "Edit"
  },
  {
    Header: "Component name",
    accessor: "Title"
  }
  ,
  {
    Header: "status",
    accessor: "status"
  }
]
const data = [];
ComponentLists.ComponentLists.edges.forEach(function (item, key) {
  data[key] = {
      ...item.node,
      edit:<span><Icon icon="edit-pencil" /><Icon icon="trash" /></span>,
      status: item.node.status === true  ? <span className="active">Active</span> : <span className="deactive" >deactive</span>,  
  };
});
 return(
  <>
  <Globalcss/>
  <SVGLibrary></SVGLibrary>
  <Standard active="Components">
    <SEO title="Components"  />
    <div items={data} columns={columns} ></div>
  </Standard>
  </>
)}

export default ComponentPage

