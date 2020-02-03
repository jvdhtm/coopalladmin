import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Link from 'react-router-dom/Link'
import style from './style'



const StyledLink = styled(({...props}) => <Link {...props} />)`${style}`


const Anchor = styled.a`${style}`
const StyledButton = styled.button`${style}`

const Button = ({ type, children ,variant,  ...props }) => { 

const className = `btn btn__${variant}`
  if (props.to) {
    return <StyledLink {...props} className={className} >
            {children}
          </StyledLink>
  } else if (props.href) {
    return <Anchor {...props} className={className}>
              {children}
            </Anchor>
  }
  return <StyledButton {...props} type={type} className={className}>
              {children}
          </StyledButton>
}

Button.propTypes = {
  type: PropTypes.string,
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'warning']),
  to: PropTypes.string,
  children: PropTypes.any,
  href: PropTypes.string
}

Button.defaultProps = {
  variant: 'primary',
  type: 'button',
}

export default Button

