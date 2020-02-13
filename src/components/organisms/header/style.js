import { css } from 'styled-components';


const style = css`
&.header{
    min-width:100vw;
    display:flex;
    border-bottom: 1px solid ${props =>  props.theme.grayscale[5] };
  .header{
    &__logo{
        display:block;
        width: 40px;
        position: relative;
        top:5px;
        left:10px;
    }
    &__button{
        display:none;
    }
    &__container{
        display: flex;
        align-items: center;
        width:calc(100% - 60px);
        position:relative;
        padding-left: 20px;
        ul{
            display:flex;
            list-style: none;
            margin:0px;
            padding:0px;
            li{
               padding:10px;
            }
        }
        a{
            text-decoration:none;
            color:${props =>  props.theme.grayscale[3] };
            &:hover{
                color:${props =>  props.theme.grayscale[4]  };
                text-decoration:none;
            }
        }
    }
  
    &__profile{
        position:absolute;
        right:10px;

        button{
        background-color: transparent;
        border: 1px solid transparent;
        }
    }
  }
}
`;

export default style;