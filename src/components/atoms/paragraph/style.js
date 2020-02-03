import { css } from 'styled-components';

const style = css`
  &.paragraph{
    color: ${props => props.theme.paragraph.color};
  }
`;

export default style;
