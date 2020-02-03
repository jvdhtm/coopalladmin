import React from 'react';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';


// Components
import H from '../../atoms/h';
import Paragraph from '../../atoms/paragraph';


const Wrapper = styled.div`
  ${style}
`;

const Block = ({ title ,children ,className ,...props }) => {

    const Class = classNames('block', className);
    return  <Wrapper className={Class}>
                    { title ? <H level="1">{title}</H>:""}
                    <Paragraph className="block__body">
                        {children}
                    </Paragraph>   
            </Wrapper> 
            
}

paragraph.propTypes = {
    children: PropTypes.any,
    title: PropTypes.string,
    className: PropTypes.string,
};


export default Block;
