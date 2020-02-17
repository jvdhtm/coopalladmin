import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Icon from '../../atoms/icon';
import Logo from '../../atoms/logo';
import Menu from '../../molecules/menu';
import style from './style';
import styled from 'styled-components';

const Wrapper = styled.header`
  ${style}
`;


const Header = ({ items,className }) => { 
  return(
    <Wrapper  className="header">
      <Link className="header__logo" to="/">
        <Logo></Logo>
      </Link>
      <div className="header__container">
          <button type="button" className="header__button" >
            <Icon icon="list"></Icon>
          </button>
          <div className="header__navigation">
              {items.length > 0 ? <Menu items = {items}></Menu>:""}
          </div>
          <div className="header__profile">
          <button type="button" className="header__email" >
            <Icon icon="envelope"></Icon>
          </button>
          <button type="button" className="header__notifications" >
            <Icon icon="notification"></Icon>
          </button>
          <button type="button"  className="header__user" >
            <Icon icon="user"></Icon>
          </button>
          </div>
        </div>
    </Wrapper>
)
}

Header.propTypes = {
  navigation: PropTypes.array,
}

export default Header
