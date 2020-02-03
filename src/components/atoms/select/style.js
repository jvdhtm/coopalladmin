import { css } from 'styled-components';
import selecticon from '../../../media/svg/select.svg';

const style = css`
& {
    .select {
      transition: all 0.2s ease;
      cursor: pointer;
      -webkit-appearance: none;
      -moz-appearance: none;
      background: transparent;
      background-image: url(${selecticon});
      padding: 10px 40px;
      border-radius: 40px;
      color: #333333;
      text-transform: uppercase;
      font-size: 12px;
      min-width: 103px;
      background-position: calc(100% - 12px) 10px;
      background-repeat: no-repeat;
      border: none;
      &__primary {
        border: 1px solid #ccc;
        background-position: calc(100% - 14px);
      }
      &__secondary {
      }
    }
  }
`;

export default style;
