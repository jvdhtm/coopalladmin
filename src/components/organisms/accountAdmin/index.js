import React, { Component } from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AccountsCard from "../../molecules/accountsCard"
import AccountCard from "../../molecules/accountCard"
// Components



const Wrapper = styled.div`
  ${style}
`;

class AccountAdmin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemActive: this.props.itemActive,
      columns:this.props.columns,
      items:this.props.items
    }
  }
  changeActiveAccountStatus(event){

    var changeActiveItem = this.state.itemActive;
    changeActiveItem.statusOrg = event.target.value;
    this.setState({itemActive:changeActiveItem});

  }
  componentWillReceiveProps(props) {
    this.setState({itemActive:props.itemActive,columns:props.columns,items:props.items});
  }
  render() {
    const Class = classNames('account', this.props.className);
    return  <Wrapper className={Class}>
                { this.state.itemActive ? <AccountCard  itemActive={this.state.itemActive} changeStatus={this.changeActiveAccountStatus.bind(this)}></AccountCard> :""}
                { this.state.items ? <AccountsCard items={this.state.items} columns={this.state.columns} ></AccountsCard>:""}
            </Wrapper> 
    }
            
}

AccountAdmin.propTypes = {
    items: PropTypes.array,
    className: PropTypes.string,
};



export default AccountAdmin;
