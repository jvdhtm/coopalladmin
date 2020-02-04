import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';


const IconTag = ({ icon ,className ,...props }) => {
    const Class = classNames('icon', className);
    return  <svg className={`${Class} icon-${icon}`}>
                <use href={`#${icon}`} />
            </svg>           
}
  
IconTag.propTypes = {
  icon: PropTypes.string,
  className: PropTypes.string
};

IconTag.defaultProps = {
  className: '',
  icon: 'close',
};


const Icon = styled(IconTag)`
  ${style}
`;

export default Icon;
