import { css } from 'styled-components';

const style = css`
  color: ${props => (props.color ? props.color : props.theme.heading.color)};
  margin: ${props => props.margin};

  & {
    .icon {
      height: 50px;
      width: 50px;
    }
  }
`;

export default style;
