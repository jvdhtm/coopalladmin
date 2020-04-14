import { css } from 'styled-components';

const style = css`
    &.accounts-card {
        .active{
            color:${props => props.theme.success};
        }
        .archived{
            color:${props => props.theme.default};
        }
        .halt{
            color:${props => props.theme.danger};
        }
        .confirming{
            color:${props => props.theme.warning};
        }
        
    }
`;

export default style;