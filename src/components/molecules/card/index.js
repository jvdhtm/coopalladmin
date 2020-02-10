import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';




const Wrapper = styled.div`
  ${style}
`;

const Card = ({  children ,className ,...props }) => {

    const Class = classNames('card', className);
    return  <Wrapper className={Class}>
                        {children}
            </Wrapper> 
            
}

Card.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};


export default Card;
