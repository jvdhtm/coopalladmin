import { createGlobalStyle } from 'styled-components';
import theme from './theme';

export default createGlobalStyle`
    html {
        box-sizing: border-box;
        font-size: 10px;
    }

    body {
        font-family: ${theme.fonts.primary};
        padding: ${theme.baseSpace * 4}px ${theme.baseSpace * 10}px;
        margin: 0;
        font-size: 1.5rem;
        line-height: 2;
    }
`;
