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
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image'


const Wrapper = styled.div`
  ${style}
`;

const BackgroundSection = ({ className,children }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "pngwave.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`white`}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
`

const FullScreen = ({ children }) => {
  return (
    <>
    <ThemeProvider theme={theme}>
        <StyledBackgroundSection>
        <Wrapper className="fullscreen"  >
            {children}
       </Wrapper>
       </StyledBackgroundSection>
      </ThemeProvider>
    </>
  )
}

FullScreen.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullScreen
