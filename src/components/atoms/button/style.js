import { css } from 'styled-components';

const style = css`
  &.btn {
    display: inline-flex;
    align-items: center;
    white-space: nowrap;
    /* height: 2.5em; */
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
    appearance: none;
    padding: ${props =>
      props.padding
        ? props.padding
        : props.theme.buttonPadding
        ? props.theme.buttonPadding
        : '1rem 2rem'};
    border-radius: 30rem;
    box-sizing: border-box;

    transition: background-color 250ms ease-out, color 250ms ease-out,
      border-color 250ms ease-out;
    &__primary {
      border: 1px solid ${props => props.theme.primary};
      background-color: ${props => props.theme.primary};
      color: ${props => props.theme.white};

      &:hover,
      &:focus,
      &:active {
        color: ${props => props.theme.primary};
        background-color: ${props => props.theme.white};
      }
    }
    &__secondary {
      background-color: ${props => props.theme.secondary};
      color: ${props => props.theme.white};
      border: 1px solid ${props => props.theme.secondary};
      &:hover,
      &:focus,
      &:active {
        color: ${props => props.theme.secondary};
        background-color: ${props => props.theme.white};
      }
    }
    &__default {
      background-color: ${props => props.theme.default};
      color: ${props => props.theme.white};
      border: 1px solid ${props => props.theme.default};
      &:hover,
      &:focus,
      &:active {
        color: ${props => props.theme.default};
        background-color: ${props => props.theme.white};
      }
    }
    &__warning {
      border: 1px solid ${props => props.theme.warning};

      background-color: ${props => props.theme.warning};
      color: ${props => props.theme.white};
      &:hover,
      &:focus,
      &:active {
        color: ${props => props.theme.warning};
        background-color: ${props => props.theme.white};
      }
    }
    &:focus {
      outline: none;
    }
  }
`;

export default style;
