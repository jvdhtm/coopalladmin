import { css } from 'styled-components';

const style = css`
&.sidebar{
        bottom: 0;
        float: none;
        height: 100vh;
        left: 0px;
        position: fixed;
        top: 52px;
        background-color:${props =>  props.theme.black};
        color:${props =>  props.theme.white};
       z-index:1;
        .sidebar {
            &__body{
                text-align:left;
            }
        }
        .menu{
            background-color:${props =>  props.theme.black};
        }
        ul{
            height:100vh;
            li{
                    position:relative;
                    padding-left: 40px;
                    &:hover{
                        background-color:${props =>  props.theme.grayscale[1]};
                        .menu{
                            right:-102%;
                        }
                    }
                   max-height:50px;
                   .menu{
                        position:absolute;
                        top:0px;
                        right:0%;
                        width:100%;
                        transition: all 1s ease;
                        z-index:-1;
                        height:auto;
                   }

            }
        }

        .icon{
            fill:${props =>  props.theme.primary};
            position: absolute;
            top:13px;
            left:10px;
            &{
                
                &-cheveron-right{
                    fill:${props =>  props.theme.white};
                    right:10px;
                    left:auto;
                }
            }
        }
    
}
`;

export default style;