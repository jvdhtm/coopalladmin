import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';
import classNames from 'classnames';



const Wrapper = styled.div`
  ${style}
`;

const CardBody = ({  children ,className ,...props }) => {

    const Class = classNames('card-body', className);
    return  <Wrapper className={Class}>
                        {children}
            </Wrapper> 
            
}

CardBody.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
};


export default CardBody;
