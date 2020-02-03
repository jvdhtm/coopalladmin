import React from 'react';
import classNames from 'classnames';
import styled from 'styled-components';
import style from './style';
import PropTypes from 'prop-types';

const ListTag = ({children, ordered, className, ...props }) => {
  const Class = classNames('list', className);
  if (ordered) {
   return (
        <ol {...props} className={Class}>
            {children}
        </ol>
    );
   }else{
      return (
          <ul {...props} className={Class}>
              {children}
          </ul>
      );
   }
};

ListTag.propTypes = {
  children: PropTypes.any,
  ordered: PropTypes.bool,
  className: PropTypes.string,
};

const List = styled(ListTag)`
  ${style}
`;

export default List;
