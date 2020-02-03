import { css } from 'styled-components';

const style = css`
&.image{
    display: block;
    width: 100%;
    height: auto;
    position: relative;
    overflow: hidden;
    padding: ${props => 100/ (parseInt(props.width)/parseInt(props.height))}% 0 0 0; 
    img{
        display: block;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
}
`;

export default style;