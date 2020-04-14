import { css } from 'styled-components';

const style = css`
&{
    
    .account-card {
                &__box{
                   
                }
                &__body{
                    text-align:left;
                    padding: ${props => props.theme.baseSpace * 4}px ${props =>  props.theme.baseSpace * 5}px;
                }
                &__header{
                    .logo{
                        width: 80px;
                        top: 10px;
                        right: 10px;
                        position: absolute ;
                    }
                    h1{
                        padding: 0px ${props =>  props.theme.baseSpace * 5}px;
                    }
                }
        }

        .btn {
                display: inline-flex;
                align-items: center;
                white-space: nowrap;
                /* height: 2.5em; */
                justify-content: center;
                text-decoration: none;
                cursor: pointer;
                appearance: none;
                padding: ${props =>
                props.padding
                    ? props.padding
                    : props.theme.buttonPadding
                    ? props.theme.buttonPadding
                    : '1rem 2rem'};
                box-sizing: border-box;
                min-width:  ${props => props.theme.btn.minWidth};;
                transition: background-color 250ms ease-out, color 250ms ease-out,
                border-color 250ms ease-out;
                &__primary {
                    border: 1px solid ${props => props.theme.primary};
                    background-color: ${props => props.theme.primary};
                    color: ${props => props.theme.white};

                    &:hover,
                    &:focus,
                    &:active {
                        color: ${props => props.theme.primary};
                        background-color: ${props => props.theme.white};
                    }
                }
            }
 }
`;

export default style;