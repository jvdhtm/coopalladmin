import { css } from 'styled-components';


const style = css`
  &.standard{
    min-height:100vh;
    min-width:100vw;
    a{
        text-decoration:none;
    }
    header{
      height:52px;;
    }

    main{
      position:relative;
      max-height:calc(100vh - 52px);
      overflow:auto;
      display:flex;
      flex-direction: row-reverse;
      .sidebar{
      width: 260px;
      }
      .content{
        width:calc(100% - 260px);
        padding:40px;
      }
    }
  }
`;

export default style;