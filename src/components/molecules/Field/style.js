import { css } from 'styled-components';

const style = css`
&{
    .field{
    position: relative;
    text-align: center;
    margin-bottom: 10px;
    background: white;
    label {
        color: #757575;
        font-size: 12px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 15px;
        top: 13px;
        transition: 0.2s ease all;
        -moz-transition: 0.2s ease all;
        -webkit-transition: 0.2s ease all;
        opacity: 1;
    }

    input:not([type='submit']){
        width: 100%;
    }
    &__box{
        width: 100%;
        text-align:left;
        padding: 5px;
        label{
            position: relative;
            top:0px;
            left:25px;
            font-family: $silka;
            font-size: 12px;
            color:$black;
        }
        .checkmark {
            position: absolute;
            top: 6px;
            left: 0;
            height: 15px;
            width: 15px;
            background-color:$white;
            border: solid 1px $black;
            &:before{
                font-family: icons !important;
                font-style: normal;
                font-weight: normal !important;
                font-variant: normal;
                text-transform: none;
                line-height: 1;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                content: "\f131";
                display: none;
            }
        }

    }
    input{
        padding: 0px 15px;
        height: 50px;
        border: none;
        max-width: 100%;
        border-radius: 0px;

        &:focus {
            outline: none;
        }
        &:focus~label {
            top: 2px;
            font-size: 10px;
            color: #757575;
        }
        &.notempty~label {
            top: 2px;
            font-size: 10px;
            color: #757575;
            opacity: 0;
        }
    }

    input[type="search"] {
        box-shadow: none;
        border: 1px solid #a0a0a0;
    }
    input[type="radio"],input[type="checkbox"] {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 100%;
        width:100%;
        z-index: 1;
        &:checked ~.checkmark {
            &:before{
                display: block;
            }


        }
    }

    select {
        padding: 5px 25px;
        height: 38px;
        width: 100%;
        border: solid 1px black;
        border-radius: 0px;
        font-size: 12px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        background-repeat: no-repeat;
        background-color: white;
        -webkit-appearance: none;
        -moz-appearance: none;
        cursor: pointer;
        

    }
    .icon{

        position:absolute;
        top:13px;
        right:10px;
    }
}
}
`;

export default style;