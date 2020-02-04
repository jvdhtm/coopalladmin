import { css } from 'styled-components';

const style = css`
&{

    .login {
                &__box{
                    margin: 0;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background:${props => props.theme.background.primary};
                    padding: ${props => props.theme.baseSpace * 4}px ${props =>  props.theme.baseSpace * 5}px;
                    border-radius:10%;
                    width:300px;
                }
                &__body{
                    text-align:left;
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