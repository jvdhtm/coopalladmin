import { css } from 'styled-components';

const style = css`
    &.user {
        display:flex;
        flex-direction:row-reverse;
        justify-content: flex-end;
        .user-card{
            flex-basis:30%;
            max-width:30%;
            
        }
        .users-card{
            flex-basis:50%;
            max-width:50%;
        }

    }
`;

export default style;