/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components';
import styled from 'styled-components'
import theme from '../../themes/default';
import style from './style'
import { useStaticQuery, graphql } from "gatsby"
import Header from "../../organisms/header"
import Sidebar from "../../organisms/sidebar"

const Wrapper = styled.div`
  ${style}
`;



const Standard = ({ children }) => {

  const data = useStaticQuery(graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
    allSidebarJson {
      edges {
        node {
          pageID
          title
          icon 
          link
          parentID
        }
      }
    }
  }
  `)


  var items = data.allSidebarJson.edges;

  var recursiveitems = [];

  function createMenuTree(items,recursiveitems,parentid){
    var children = [];
    var count = 0;
    items.forEach(function (item, key) {
        // eslint-disable-next-line
        if(item.node.parentID == parentid ){
          recursiveitems[count] = item.node;
          children[count] = item.node;
          recursiveitems[count].children = createMenuTree(items,recursiveitems,item.node.pageID);
          count++;
          //
        }
    });
    return children;
  }
  createMenuTree(items,recursiveitems,-1);
  return (
    <>
    <ThemeProvider theme={theme}>
      <Wrapper className="standard"  >
          <Header/>
          <Sidebar items={recursiveitems} title="main navigation"/>
          <main className="main">
            {children}
          </main>
       </Wrapper> 
      </ThemeProvider>
    </>
  )
}

Standard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Standard
