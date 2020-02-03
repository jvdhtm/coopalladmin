import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classNames from 'classnames';
import H from '../../atoms/h';


import style from './style';

const Wrapper = styled.div`
  ${style}
`;

class Login extends Component {
  render() {
    const Class = classNames('Login', this.props.className);
    return (
      <Wrapper className={Class}>
          <H level={3}>{this.props.label}</H>
      </Wrapper>
    );
  }
}

Login.propTypes = {
  label: PropTypes.string,
};

export default Login;