import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Icon from '../../atoms/icon';

const Header = ({ siteTitle, navigation }) => { 
  return(
    <header class="header">
        <button type="button" class="d-lg-none navbar-toggler" data-sidebar-toggler="true">
         <Icon icon="list"></Icon>
        </button>
        <ul>
            <li><a class="nav-link active" href="#/dashboard" aria-current="page">Dashboard</a></li>
            <li><a class="nav-link" href="#/users">Users</a></li>
            <li><a class="nav-link" href="#/dashboard">Settings</a></li>
        </ul>
        <button type="button" class="d-md-down-none navbar-toggler"><span class="navbar-toggler-icon"></span></button>
    </header>
)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
