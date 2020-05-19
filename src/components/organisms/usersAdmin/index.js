import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import UsersCard from "../../molecules/usersCards"
import UserCard from "../../molecules/userCard"
// Components



const Wrapper = styled.div`
  ${style}
`;

class UserAdmin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        itemActive: this.props.itemActive,
        columns:this.props.columns,
        items:this.props.items
        }
    }
    changeEmail(event){
        var changeActiveItem = this.state.itemActive;
        changeActiveItem.email = event.target.value;
        this.setState({itemActive:changeActiveItem});
    }
    changeFirstName(event){
        var changeActiveItem = this.state.itemActive;
        changeActiveItem.firstName = event.target.value;
        this.setState({itemActive:changeActiveItem});
    }
    changeLastName(event){
        var changeActiveItem = this.state.itemActive;
        changeActiveItem.lastName = event.target.value;
        this.setState({itemActive:changeActiveItem});
    }
    changePassword(event){
        var changeActiveItem = this.state.itemActive;
        changeActiveItem.password = event.target.value;
        this.setState({itemActive:changeActiveItem});
    }
    changeStatus(event){
        var changeActiveItem = this.state.itemActive;
        changeActiveItem.statusOrg = event.target.value;
        this.setState({itemActive:changeActiveItem});
    }
    componentWillReceiveProps(props) {
        this.setState({itemActive:props.itemActive,columns:props.columns,items:props.items});
    }
    render() {
        console.log(this.state.itemActive);
    const Class = classNames('user', this.props.className);
    return  <Wrapper className={Class}>
                {this.state.itemActive ? <UserCard  itemActive={this.state.itemActive} changeStatus={this.changeStatus.bind(this)}  changeEmail={this.changeEmail.bind(this)} changeFirstName={this.changeFirstName.bind(this)} changeLastName={this.changeLastName.bind(this)} changePassword={this.changePassword.bind(this)} ></UserCard>:""}
                {this.state.items ?  <UsersCard items={this.state.items} columns={this.state.columns} ></UsersCard>:""}
            </Wrapper> 
    }
            
}

UserAdmin.propTypes = {
    items: PropTypes.array,
    className: PropTypes.string,
};



export default UserAdmin;
