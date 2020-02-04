import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }
    #spritemap{
        display:none;
    }
    body {
        font-family: ${theme.fonts.primary};
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
   *{
    box-sizing: border-box;
   }
`;
