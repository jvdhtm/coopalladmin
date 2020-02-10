import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';




const Wrapper = styled.div`
  ${style}
`;

const CardColumns = ({  children ,className ,...props }) => {

    const Class = classNames('card-columns', className);
    return  <Wrapper className={Class}>
                        {children}
            </Wrapper> 
            
}

CardColumns.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};


export default Card;
