import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Icon from '../../atoms/icon';
import Logo from '../../atoms/logo';
import Menu from '../../molecules/menu';
import style from './style';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${style}
`;


const Header = ({ items }) => { 
  return(
    <Wrapper >
    <header className="header">
      <Link className="header__logo" to="/admin/">
        <Logo></Logo>
      </Link>
      <div className="header__container">
          <button type="button" className="header__button" >
            <Icon icon="list"></Icon>
          </button>
          <div className="header__navigation">
              {items.length > 0 ? <Menu items = {items}></Menu>:""}
          </div>
          <button type="button" className="header__profile" >
            <Icon icon="user"></Icon>
          </button>
        </div>
    </header>
    </Wrapper>
)
}

Header.propTypes = {
  navigation: PropTypes.array,
}

export default Header
