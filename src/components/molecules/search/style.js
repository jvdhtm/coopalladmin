import { css } from 'styled-components';

const style = css`
&{

    .search{
        input{
            height:30px;
        }
        label{
            top: 3px;
        }
        .icon{
            top: 9px;
            height:15px;
            width:15px;
        }
        input:focus~label {
        top: 2px;
        font-size: 0px;
        color: #757575;
            }   
        }
}`;
export default style;