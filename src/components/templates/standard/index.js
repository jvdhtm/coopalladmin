/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components';

import Header from "../../organisms/header/header"
import theme from '../../themes/default';


const Standard = ({ children }) => {


  return (
    <>
    <ThemeProvider theme={theme}>
      <Header  />
        {children}
      </ThemeProvider>
    </>
  )
}

Standard.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Standard
