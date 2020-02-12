import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';
import classNames from 'classnames';



const Wrapper = styled.div`
  ${style}
`;

const CardHeader = ({  children ,className ,...props }) => {
    const Class = classNames('card-header', className);
    return  <Wrapper className={Class}>
                        {children}
            </Wrapper> 
            
}

CardHeader.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};


export default CardHeader;
