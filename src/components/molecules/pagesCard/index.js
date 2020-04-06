import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';
import  Table from '../table';
import classNames from 'classnames';


// Components


const Wrapper = styled.table`
  ${style}
`;

const pagesCard = ({ items, columns ,className ,...props }) => {
    const Class = classNames('pages', className);
    return  <Wrapper className={Class}>
                <Table columns={columns} data={items} />
            </Wrapper> 
            
}

pagesCard.propTypes = {
    items: PropTypes.array,
    className: PropTypes.string,
};



export default pagesCard;
