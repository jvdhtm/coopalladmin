import { css } from 'styled-components';

const style = css`
    &.table {
        padding: 1rem;
        table { 
            width: 750px; 
            border-collapse: collapse; 
            margin:50px auto;
	    }
        /* Zebra striping */
        tr:nth-of-type(odd) { 
            background: ${props => props.theme.grayscale[5]}; 
            }

        th { 
            background: ${props => props.theme.secondary}; 
            color: white; 
            font-weight: bold; 
            }

        td, th { 
            padding: 10px; 
            border: 1px solid ${props => props.theme.grayscale[4]}; 
            text-align: left; 
            font-size: 18px;
        }
    }
`;

export default style;