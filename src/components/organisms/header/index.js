import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Icon from '../../atoms/icon';
import Logo from '../../atoms/logo';
import ListTag from '../../atoms/list';
import style from './style';
import styled from 'styled-components';

const Wrapper = styled.div`
  ${style}
`;


const Header = ({  navigation }) => { 
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
          <ListTag className="header__navigation">
              <li><Link to="/admin/">Admin</Link></li>
              <li><Link to="/dashboard/">Dashboard</Link></li>
              <li><Link to="/accounts/">Accounts</Link></li>
              <li><Link to="/users/">Users</Link></li>
              <li><Link to="/roles/">Users</Link></li>
          </ListTag>
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
