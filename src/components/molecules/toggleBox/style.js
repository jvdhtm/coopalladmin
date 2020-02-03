import { css } from 'styled-components';

const style = css`
  .toggle-box__heading {
    display: flex;
    cursor: pointer;
  }
  .toggle-box__icon {
    width: 18px;
    margin-right: 10px;
    transition: transform 0.3s linear;
  }
  .toggle-box__icon--180deg {
    width: 18px;
    margin-right: 10px;
    transform: rotate(180deg);
    transition: transform 0.3s linear;
  }
`;
export default style;
