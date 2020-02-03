import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';


const ParagraphTag = styled.p`
  ${style}
`;

const Paragraph = ({children, className, ...props }) => {
  const Class = classNames('paragraph', className);
  return (
    <ParagraphTag className={Class} {...props}>
      {children}
    </ParagraphTag>
  );
};

Paragraph.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};



export default Paragraph;
