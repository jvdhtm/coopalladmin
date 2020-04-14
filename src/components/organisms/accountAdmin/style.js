import { css } from 'styled-components';

const style = css`
    &.account {
        display:flex;
        flex-direction:row-reverse;
        justify-content: flex-end;
        .account-card{
            flex-basis:30%;
            max-width:30%;
            
        }
        .accounts-card{
            flex-basis:50%;
            max-width:50%;
        }

    }
`;

export default style;