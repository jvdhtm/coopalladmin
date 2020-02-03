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


const Wrapper = styled.div`
  ${style}
`;

const FullScreen = ({ children }) => {
 
  return (
    <>
    <ThemeProvider theme={theme}>
        <Wrapper className="fullscreen">
            {children}
       </Wrapper>
      </ThemeProvider>
    </>
  )
}

FullScreen.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullScreen
