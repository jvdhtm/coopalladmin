import { css } from 'styled-components';

const style = css`
    &.pages-admin {
        display:flex;
        flex-direction:row-reverse;
        justify-content: flex-end;
        .page-card{
            flex-basis:30%;
            max-width:30%;
            
        }
        .pages-card{
            flex-basis:50%;
            max-width:50%;
        }

    }
`;

export default style;