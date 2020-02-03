import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';


const Wrapper = styled.div`
  ${style}
`;


const Image = ({src ,alt ,className ,width  ,height , ...props }) => {
        const Class = classNames('image', className);
        return <Wrapper className={Class} height={height} width={width}>
                     <img src={src} alt={alt}  {...props}/> 
               </Wrapper>
  }

  Image.propTypes = {
    src: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    alt: PropTypes.string,
    className: PropTypes.string
  };
  
  export default Image;


