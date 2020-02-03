import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import style from './style';

const Wrapper = styled.div`
  ${style}
`;

const Select = ({ multiple, variant, options, placeholder, ...props }) => {
  const Class = `select select__${variant}`;

  return (
    <Wrapper >
      <select onChange={props.onChange} className={Class} {...props}>
        {placeholder ? <option value="">{placeholder}</option> : ''}
        {options.map((option, i) => {
          return (
            <option key={i} value={option.value}>
              {option.text}
            </option>
          );
        })}
        ;
      </select>
    </Wrapper>
  );
};

Select.propTypes = {
  multiple: PropTypes.string,
  options: PropTypes.array,
  variant: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Select.defaultProps = {
  options: [{ text: 'First', value: '1' }, { text: 'Second', value: '1' }],
  variant: '',
};

export default Select;
