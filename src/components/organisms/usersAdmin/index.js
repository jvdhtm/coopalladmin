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

const User = ({ items,itemActive, columns ,className ,...props }) => {
    const Class = classNames('user', className);
    console.log(itemActive);
    return  <Wrapper className={Class}>
      {itemActive ? <UserCard  itemActive={itemActive}></UserCard>:""}
                <UsersCard items={items} columns={columns} ></UsersCard>
                
            </Wrapper> 
            
}

User.propTypes = {
    items: PropTypes.array,
    className: PropTypes.string,
};



export default User;
