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
    changeEmail(){
        
    }
    changeFirstName(){

    }
    changeLastName(){

    }
    changePassword(){

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
    return  <Wrapper className={this.props.Class}>
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
