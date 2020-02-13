import { css } from 'styled-components';

const style = css`
    &.grids.flexrow {
            display:flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
        .col{

            &-2{
                position: relative;
                width: 100%;
                padding-right: 15px;
                padding-left: 15px;
                flex: 0 0 20%;
                max-width: 20%;

            }
            &-6{
                position: relative;
                width: 100%;
                padding-right: 15px;
                padding-left: 15px;
                flex: 0 0 50%;
                max-width: 50%;

            }
        }
    }
`;

export default style;