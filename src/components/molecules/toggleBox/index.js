import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import H from '../../atoms/h';
import selecticon from '../../../media/svg/select.svg';

import style from './style';

const Wrapper = styled.div`
  ${style}
`;

class ToggleBox extends Component {
  state = {
    shown: false,
  };
  render() {
    return (
      <Wrapper>
        <div
          onClick={() => this.setState({ shown: !this.state.shown })}
          className="toggle-box__heading"
        >
          <img
            className={
              this.state.shown ? `toggle-box__icon--180deg` : `toggle-box__icon`
            }
            src={selecticon}
            alt="Select Icon"
          />
          <H level={3}>{this.props.label}</H>
        </div>
        {this.state.shown && <>{this.props.children}</>}
      </Wrapper>
    );
  }
}

ToggleBox.PropTypes = {
  label: PropTypes.string,
};

export default ToggleBox;
