import { css } from 'styled-components';

const style = css`
&{
    .sidebar {
        bottom: 0;
        float: none;
        height: 100vh;
        left: 0;
        position: fixed;
        top: 80px;
        background-color:${props =>  props.theme.black};
        color:${props =>  props.theme.white};
        width: 260px;
        &__body{
            text-align:left;
        }
    }
}
`;

export default style;