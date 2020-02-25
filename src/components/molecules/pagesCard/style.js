import { css } from 'styled-components';

const style = css`
    &.pages {
        .active{
            color:${props => props.theme.success};
        }
        .archived{
            color:${props => props.theme.default};
        }
        .halt{
            color:${props => props.theme.danger};
        }
        .deactive{
            color:${props => props.theme.warning};
        }
        
    }
`;

export default style;