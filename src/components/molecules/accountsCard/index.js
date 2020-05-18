import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';
import  Table from '../../molecules/table';
import classNames from 'classnames';


// Components



const Wrapper = styled.div`
  ${style}
`;

const AccountsCard = ({ items, columns ,className ,...props }) => {
    const Class = classNames('accounts-card', className);

    return  <Wrapper className={Class}>
                <Table columns={columns} data={items} />
            </Wrapper> 
            
}

AccountsCard.propTypes = {
    items: PropTypes.array,
    className: PropTypes.string,
};



export default AccountsCard;
